import React, { useState, useRef } from 'react';
import Textarea from 'terra-form-textarea';

const TextareaProgrammaticSet = () => {
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  const setTextClick = () => {
    if (inputRef.current) {
      inputRef.current.value = 'IpsumLorem';
      const customEvent = new Event('input', {
        bubbles: true,
        cancelable: false,
      });
      inputRef.current.dispatchEvent(customEvent);
    }
  };

  const handleChange = (event, value) => {
    setText(value);
  };

  const handleInput = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <Textarea
        onChange={handleChange}
        onInput={handleInput}
        value={text}
        refCallback={(ref) => { inputRef.current = ref; }}
      />
      <button type="button" onClick={setTextClick} id="textarea-set-text-button">
        Set textarea text
      </button>
    </div>
  );
};

export default TextareaProgrammaticSet;
