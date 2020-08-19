import React, { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import Button from 'terra-button';
import Textarea from '../../../Textarea';
import styles from './common/Textarea.test.module.scss';

const cx = classNames.bind(styles);

const SettingValueTextarea = () => {
  const [inputTriggerCount, setInputTriggerCount] = useState(0);
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
    setInputTriggerCount(inputTriggerCount + 1);
  };

  return (
    <div className={cx('content-wrapper')}>
      <p>
        onInput Trigger Count:
        {' '}
        <span>{inputTriggerCount}</span>
      </p>
      <Textarea
        onChange={handleChange}
        onInput={handleInput}
        value={text}
        ariaLabel="label"
        refCallback={(ref) => { inputRef.current = ref; }}
      />
      <Button text="Set textarea text" onClick={setTextClick} id="textarea-set-text-button" />
    </div>
  );
};

export default SettingValueTextarea;
