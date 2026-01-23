import React, { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

function MyAwesomeComponent() {
  const [count, setCount] = useState(0);

  // Binds the 'a' key to increment the count
  useHotkeys('a', () => setCount(prevCount => prevCount + 1));

  // Supports combinations like 'ctrl+s' or the cross-platform 'mod+s' (cmd on Mac, ctrl on others)
  useHotkeys('mod+s', (event) => {
    event.preventDefault(); // Prevents default browser behavior like saving the page
    console.log('Saved!');
  });

  return (
    <span>Count: {count}</span>
  );
}
// https://github.com/JohannesKlauss/react-hotkeys-hook
