import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import civetVitePlugin from '@danielx/civet/vite'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin(), civetVitePlugin({})]
  },
  preload: {
    plugins: [externalizeDepsPlugin(), civetVitePlugin({})]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [react(), civetVitePlugin({})]
  }
})
