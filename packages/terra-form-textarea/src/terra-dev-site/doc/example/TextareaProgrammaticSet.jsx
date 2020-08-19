import React, { useState, useRef } from 'react';
import Button from 'terra-button';
import Textarea from 'terra-form-textarea';

const TextareaProgrammaticSet = () => {
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  const setTextClick = () => {
    if (inputRef.current) {
      inputRef.current.value = 'IpsumLorem';
      let customEvent;
      if (typeof (Event) === 'function') {
        customEvent = new Event('input', {
          bubbles: true,
          cancelable: false,
        });
      } else {
        customEvent = document.createEvent('Event');
        customEvent.initEvent('input', true, false);
      }
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
      <Button text="Set textarea text" onClick={setTextClick} id="textarea-set-text-button" />
    </div>
  );
};

export default TextareaProgrammaticSet;
