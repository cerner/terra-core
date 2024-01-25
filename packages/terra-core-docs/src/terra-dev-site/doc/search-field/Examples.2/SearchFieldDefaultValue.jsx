import React from 'react';
import SearchField from 'terra-search-field';
import Field from 'terra-form-field';

const SearchFieldDefaultValue = () => (
  <>
    <Field label="Find a clinic" htmlFor="color-field-1" />
    <SearchField defaultValue="Default" />
  </>
);

export default SearchFieldDefaultValue;
