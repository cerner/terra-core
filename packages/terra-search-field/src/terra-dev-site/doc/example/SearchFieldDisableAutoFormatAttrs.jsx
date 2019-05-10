import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import SearchFieldExampleTemplate from 'terra-search-field/lib/terra-dev-site/doc/example/SearchFieldExampleTemplate';

const SearchFieldDisabledAutoFormatting = () => (
  <SearchFieldExampleTemplate
    inputAttributes={{
      autoCorrect: 'off',
      autoComplete: 'off',
      autoCapitalize: 'off',
      spellCheck: 'false',
    }}
  />
);

export default SearchFieldDisabledAutoFormatting;
