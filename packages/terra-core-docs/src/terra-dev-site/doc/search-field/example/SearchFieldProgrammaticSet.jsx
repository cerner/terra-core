import React, { useState, useRef } from 'react';
import Button from 'terra-button/lib/Button';
import SearchField from 'terra-search-field';

const SearchFieldProgrammaticSet = () => {
  const [searchText, setSearchText] = useState('');
  const [message, setMessage] = useState('');
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
      <Button text="Set search field text" onClick={setTextClick} id="search-field-set-text-button" />
      <p>Minimum Search Length is 3</p>
      <SearchField
        id="searchfield"
        onSearch={handleSearch}
        onInvalidSearch={handleInvalidSearch}
        onChange={handleChange}
        onInput={handleInput}
        minimumSearchTextLength={3}
        value={text}
        inputRefCallback={(ref) => { inputRef.current = ref; }}
      />
      <div id="search-callback-text">
        {message}
        {searchText}
      </div>
    </div>
  );
};

export default SearchFieldProgrammaticSet;
