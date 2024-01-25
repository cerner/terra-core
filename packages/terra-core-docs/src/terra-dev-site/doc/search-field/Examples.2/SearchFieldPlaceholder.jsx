import React from 'react';
import SearchField from 'terra-search-field';
import Field from 'terra-form-field';

const SearchFieldPlaceholder = () => (
  <>
    <Field label="Find a clinic" htmlFor="color-field-1" />
    <SearchField placeholder="- Search Here -" />
  </>
);

export default SearchFieldPlaceholder;
