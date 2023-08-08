import React, { useState, useRef } from 'react';
import SearchField from 'terra-search-field';
import Button from 'terra-button';

const SearchFieldFocus = () => {
  let searchElement = useRef(null);
  const [setSearchText] = useState({ searchText: '' });

  const handleButtonClick = () => {
    if (searchElement) {
      searchElement.focus();
    }
  };

  return (
    <div>
      <Button text="Focus Me" onClick={handleButtonClick} id="search-field-focus-button" />
      <SearchField
        inputRefCallback={(inputRef) => { searchElement = inputRef; }}
        onSearch={setSearchText}
        onInvalidSearch={setSearchText}
      />
    </div>
  );
};

export default SearchFieldFocus;
