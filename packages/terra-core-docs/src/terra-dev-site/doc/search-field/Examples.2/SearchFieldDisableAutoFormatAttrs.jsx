import React from 'react';
import SearchField from 'terra-search-field';
import Field from 'terra-form-field';

const SearchFieldDisableAutoFormatAttrs = () => (
  <>
    <Field label="Find a clinic" htmlFor="color-field-1" />
    <SearchField
      inputAttributes={{
        autoCorrect: 'off',
        autoComplete: 'off',
        autoCapitalize: 'off',
        spellCheck: 'false',
      }}
    />
  </>
);

export default SearchFieldDisableAutoFormatAttrs;
