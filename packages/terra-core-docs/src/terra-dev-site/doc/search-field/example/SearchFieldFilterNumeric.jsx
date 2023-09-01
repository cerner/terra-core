import React, { useState } from 'react';
import SearchField from 'terra-search-field';

const SearchFieldFilterNumeric = () => {
  const [state, setSearchText] = useState({ searchText: '' });

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
    <SearchField onSearch={handleSearchText} onChange={handleChange} value={state.searchText} />
  );
};

export default SearchFieldFilterNumeric;
