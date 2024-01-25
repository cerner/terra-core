import React, { useState } from 'react';
import SearchField from 'terra-search-field';
import Field from 'terra-form-field';

const INVALID_MESSAGE = 'The default minimum search length is 5.';

const SearchFieldMinimumLength = () => {
  const [searchText, setSearchText] = useState('');

  const message = searchText.length >= 5 ? `Search text: ${searchText}` : INVALID_MESSAGE;

  return (
    <div>
      <Field label="Find a clinic" htmlFor="color-field-1" />
      <p>{message}</p>
      <SearchField minimumSearchTextLength={5} onSearch={setSearchText} onInvalidSearch={setSearchText} />
    </div>
  );
};

export default SearchFieldMinimumLength;
