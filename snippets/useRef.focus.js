// In React, you can programmatically change focus on a textarea when a value is changed by using the useRef hook to reference the DOM element and the useEffect hook to call the focus() method when a specific dependency (the value) changes. 
// Steps to Implement
// Import necessary hooks: Import useRef and useEffect from React.
// Create a ref: Initialize a ref using useRef(null) and attach it to the textarea element using the ref attribute.
// Use useEffect: Call the focus() method inside useEffect. Add the state variable that holds the textarea's value to the dependency array. This ensures the effect runs whenever the value changes. 
import React, { useState, useRef, useEffect } from 'react';

const AutoFocusTextarea = () => {
  const [value, setValue] = useState('');
  const textareaRef = useRef(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    // Check if the ref is attached to a DOM element and then call focus()
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [value]); // The effect runs whenever 'value' changes

  return (
    <div>
      <p>Start typing below. Focus will be reset on each change.</p>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        rows={5}
        cols={30}
      />
    </div>
  );
};

export default AutoFocusTextarea;
