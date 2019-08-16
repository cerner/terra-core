import React, { useState } from 'react';
import SearchField from 'terra-search-field';

const INVALID_MESSAGE = 'The default minimum search length is 2.';

const SearchFieldFilterNumeric = () => {
  const [state, setSearchText] = useState({ searchText: '' });

  const message = state.searchText && state.searchText.length >= 2 ? `Search text: ${state.searchText}` : INVALID_MESSAGE;

  const handleChange = (event, text) => {
    let inputText = text;
    if (text && text.length > 0 && /\d/.test(text)) {
      inputText = text.substring(0, text.length - 1);
    }
    setSearchText({ searchText: inputText });
  };

  const handleSearchText = (text) => {
    setSearchText({ searchText: text });
  };

  return (
    <div>
      <p>{message}</p>
      <SearchField onSearch={handleSearchText} onChange={handleChange} value={state.searchText} />
    </div>
  );
};

export default SearchFieldFilterNumeric;
