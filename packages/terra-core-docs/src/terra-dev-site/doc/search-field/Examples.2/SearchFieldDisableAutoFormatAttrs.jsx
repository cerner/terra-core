import React from 'react';
import SearchField from 'terra-search-field';

const SearchFieldDisableAutoFormatAttrs = () => (
  <SearchField
    isLabelVisible
    inputAttributes={{
      autoCorrect: 'off',
      autoComplete: 'off',
      autoCapitalize: 'off',
      spellCheck: 'false',
    }}
  />
);

export default SearchFieldDisableAutoFormatAttrs;
