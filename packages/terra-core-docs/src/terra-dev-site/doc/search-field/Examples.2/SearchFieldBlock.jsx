import React from 'react';
import SearchField from 'terra-search-field';
import Field from 'terra-form-field';

const SearchFieldBlock = () => (
  <>
    <Field label="Find a clinic" htmlFor="color-field-1" />
    <SearchField isBlock />
  </>

);

export default SearchFieldBlock;
