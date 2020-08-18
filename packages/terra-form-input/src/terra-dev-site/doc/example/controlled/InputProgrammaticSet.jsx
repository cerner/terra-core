import React, { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import Button from 'terra-button';
import Input from 'terra-form-input';
import Styles from './examplestyles.scss';

const cx = classNames.bind(Styles);

const InputProgrammaticSet = () => {
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
      <Input
        onChange={handleChange}
        onInput={handleInput}
        value={text}
        refCallback={(ref) => { inputRef.current = ref; }}
      />
      <Button text="Set input text" onClick={setTextClick} id="search-field-set-text-button" className={cx('programattic-button')} />
    </div>
  );
};

export default InputProgrammaticSet;
