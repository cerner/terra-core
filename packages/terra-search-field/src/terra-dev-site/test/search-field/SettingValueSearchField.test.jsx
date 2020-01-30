import React, { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import Button from 'terra-button/lib/Button';
import SearchField from '../../../SearchField';
import styles from './examplestyles.scss';

const cx = classNames.bind(styles);

const SettingValueSearchField = () => {
  const [searchText, setSearchText] = useState('');
  const [message, setMessage] = useState('');
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  const setTextClick = () => {
    if (inputRef.current) {
      setTimeout(() => {
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
      }, 1000);
    }
  };

  const handleInvalidSearch = (value) => {
    setSearchText(value);
    setMessage('INVALID Search Text: ');
  };

  const handleChange = (event, value) => {
    setText(value);
  };

  const handleInput = (event) => {
    setText(event.target.value);
  };

  const handleSearch = (value) => {
    setSearchText(value);
    setMessage('Search Text: ');
  };

  return (
    <div>
      <div> Minimum Search Length is 3 </div>
      <SearchField
        inputRef
        id="searchfield"
        onSearch={handleSearch}
        onInvalidSearch={handleInvalidSearch}
        onChange={handleChange}
        onInput={handleInput}
        minimumSearchTextLength={3}
        value={text}
        inputRefCallback={(ref) => { inputRef.current = ref; }}
      />
      <Button text="Set search field text" onClick={setTextClick} id="search-field-set-text-button" className={cx('programattic-button')} />
      <div id="search-callback-text">
        {message}
        {searchText}
      </div>
    </div>
  );
};

export default SettingValueSearchField;
