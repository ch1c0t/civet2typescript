import React, { useState, useEffect, useRef } from 'react';

function ClearableTextarea() {
  const [value, setValue] = useState('');
  const textareaRef = useRef(null);

  const handleKeyDown = (event) => {
    // Check for Ctrl+U (Windows/Linux) or Cmd+U (macOS)
    if ((event.ctrlKey || event.metaKey) && event.key === 'u') {
      event.preventDefault(); // Prevent default browser action (e.g., view source)
      setValue(''); // Clear the textarea by setting state to empty string
    }
  };

  useEffect(() => {
    // Add the event listener to the document
    document.addEventListener('keydown', handleKeyDown);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor="my-textarea">Textarea (Press Ctrl+U to clear):</label>
      <textarea
        id="my-textarea"
        ref={textareaRef}
        value={value} // Controlled component: value reflects the state
        onChange={handleChange}
        rows={5}
        cols={40}
        placeholder="Type something here..."
      />
    </div>
  );
}

export default ClearableTextarea;

