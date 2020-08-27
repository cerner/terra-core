import React, { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import Input from 'terra-form-input';
import styles from './InputProgrammaticSet.module.scss';

const cx = classNames.bind(styles);

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

  const handleChange = (event) => {
    setText(event.target.value);
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
      <button type="button" onClick={setTextClick} id="input-set-text-button" className={cx('programmatic-button')}>
        Set input text
      </button>
    </div>
  );
};

export default InputProgrammaticSet;
