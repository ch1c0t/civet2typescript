// preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // Expose a function that sends a message to the main process and waits for a reply
  fetchInitialData: async () => {
    return ipcRenderer.invoke('get-initial-data');
  },
  // You can also expose a way to subscribe to updates
  onUpdateData: (callback) => ipcRenderer.on('update-data', (event, value) => callback(value))
});


// main.js
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');

const createWindow = () => {
  const win = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      // It is a security best practice to have nodeIntegration: false and contextIsolation: true
      contextIsolation: true,
      nodeIntegration: false,
    }
  });
  // ... load your React app (e.g., from a dev server or built file)
};

// Handle the request for initial data
ipcMain.handle('get-initial-data', async (event) => {
  // Fetch data from a secure source in the main process (e.g., file system, database)
  const data = { count: 42, username: 'TestUser' };
  return data;
});


// renderer/atoms.js
import { atom } from 'jotai';

// Assume window.electronAPI is available due to contextBridge
const initialDataAtom = atom(async () => {
  // This function runs once when the atom is first read
  const data = await window.electronAPI.fetchInitialData();
  return data;
});

// A derived read/write atom to manage the actual state
export const dataAtom = atom(
  (get) => get(initialDataAtom), // Read the async atom
  (get, set, update) => {
    // Handle updates here if needed
    // set(initialDataAtom, update); // Would need a writable async atom
  }
);


// renderer/App.jsx
import React, { Suspense } from 'react';
import { useAtomValue } from 'jotai';
import { dataAtom } from './atoms';

const DataDisplay = () => {
  // This will suspend until the data is fetched via the preload script
  const data = useAtomValue(dataAtom);

  return (
    <div>
      <h1>Welcome, {data.username}!</h1>
      <p>Initial Count: {data.count}</p>
    </div>
  );
};

const App = () => {
  return (
    <Suspense fallback={<div>Loading application data...</div>}>
      <DataDisplay />
    </Suspense>
  );
};

export default App;

