import React, { useState, useRef } from 'react';
import SearchField from 'terra-search-field';
import classNames from 'classnames/bind';
import styles from './SearchFieldInvalid.module.scss';

const cx = classNames.bind(styles);

const SearchFieldInvalid = () => {
  const [isInvalid, setInvalid] = useState(false);
  const [message, setMessage] = useState('');
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  const handleInvalidSearch = (value) => {
    setText(value);
    setInvalid(true);
    setMessage('INVALID Search Text: ');
    if (inputRef.current) {
      inputRef.current.classList.add(styles['error-border']); // Add red border on invalid search
    }
  };

  const handleChange = (event, value) => {
    setText(value);
    setInvalid(false);
  };

  const handleInput = (event) => {
    setText(event.target.value);
  };

  const handleSearch = (value) => {
    setText(value);
    setMessage('Search Text: ');
    if (inputRef.current) {
      inputRef.current.classList.remove(styles['error-border']); // Remove red border on valid search
    }
  };

  return (
    <div>
      <p>Minimum Search Length is 3</p>
      <SearchField
        id="searchfield"
        inputAttributes={{ 'aria-invalid': isInvalid, 'aria-describedby': 'search-callback-text' }}
        onSearch={handleSearch}
        onInvalidSearch={handleInvalidSearch}
        onChange={handleChange}
        onInput={handleInput}
        minimumSearchTextLength={3}
        value={text}
        inputRefCallback={(ref) => { inputRef.current = ref; }}
        searchDelay={500}
        isLabelVisible
        groupName="Find a clinic"
      />
      <div id="search-callback-text" className={isInvalid ? cx('error-text') : ''}>
        {message}
        {text}
      </div>
    </div>
  );
};

export default SearchFieldInvalid;
