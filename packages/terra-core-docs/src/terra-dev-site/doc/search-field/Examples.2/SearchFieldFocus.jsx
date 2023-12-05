import React, { useRef } from 'react';
import SearchField from 'terra-search-field';
import Button from 'terra-button';

const SearchFieldFocus = () => {
  let searchElement = useRef(null);

  const handleButtonClick = () => {
    if (searchElement) {
      searchElement.current.focus();
    }
  };

  return (
    <div>
      <Button text="Focus Me" onClick={handleButtonClick} id="search-field-focus-button" />
      <SearchField
        inputRefCallback={(inputRef) => { searchElement.current = inputRef; }}
      />
    </div>
  );
};

export default SearchFieldFocus;
