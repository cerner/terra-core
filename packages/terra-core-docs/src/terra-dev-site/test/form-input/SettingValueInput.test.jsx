import React, { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import Input from 'terra-form-input';
import Styles from './common/Input.test.module.scss';

const cx = classNames.bind(Styles);

const SettingValueInput = () => {
  const [inputTriggerCount, setInputTriggerCount] = useState(0);
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

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleInput = (event) => {
    setText(event.target.value);
    setInputTriggerCount(inputTriggerCount + 1);
  };

  return (
    <div className={cx('content-wrapper')}>
      <p>
        onInput Trigger Count:
        {' '}
        <span>{inputTriggerCount}</span>
      </p>
      <Input
        onChange={handleChange}
        onInput={handleInput}
        value={text}
        ariaLabel="label"
        refCallback={(ref) => { inputRef.current = ref; }}
      />
      <button type="button" onClick={setTextClick} id="input-set-text-button" className={cx('programmatic-button')}>
        Set input text
      </button>
    </div>
  );
};

export default SettingValueInput;
