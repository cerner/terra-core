import React from 'react';
import SearchField from 'terra-search-field';
import Field from 'terra-form-field';

const SearchFieldDelayed = () => (
  <>
    <Field label="Find a clinic" htmlFor="color-field-1" />
    <SearchField searchDelay={3000} />
  </>
);

export default SearchFieldDelayed;
