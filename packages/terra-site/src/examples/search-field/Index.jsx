/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-search-field/docs/README.md';
import { version } from 'terra-search-field/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import SearchFieldSrc from '!raw-loader!terra-search-field/src/SearchField';

// Example Files
import SearchFieldBasic from './SearchFieldBasic';
import SearchFieldPlaceholder from './SearchFieldPlaceholder';
import SearchFieldMinimumLength from './SearchFieldMinimumLength';
import SearchFieldDelayed from './SearchFieldDelayed';
import SearchFieldDefaultValue from './SearchFieldDefaultValue';
import SearchFieldDisabled from './SearchFieldDisabled';
import SearchFieldBlock from './SearchFieldBlock';
import SearchFieldDisableAutoSearch from './SearchFieldDisableAutoSearch';
import SearchFieldFilterNumeric from './SearchFieldFilterNumeric';

const SearchFieldExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={SearchFieldSrc} />
    <h2 id="searchField">Search Field</h2>
    <SearchFieldBasic />
    <br />
    <h2 id="searchFieldPlaceholder">Search Field with placeholder text</h2>
    <SearchFieldPlaceholder />
    <br />
    <h2 id="searchFieldMinimumLength">Search Field with minimum search text length of 5 characters</h2>
    <SearchFieldMinimumLength />
    <br />
    <h2 id="searchFieldDelayed">Search Field with delay of 2000ms</h2>
    <SearchFieldDelayed />
    <br />
    <h2 id="searchFieldDefaultValue">Search Field with a default value</h2>
    <SearchFieldDefaultValue />
    <br />
    <h2 id="searchFieldDisabled">Search Field that is disabled</h2>
    <SearchFieldDisabled />
    <br />
    <h2 id="searchFieldBlock">Search Field that displays as block style to fill container</h2>
    <SearchFieldBlock />
    <br />
    <h2 id="searchFieldDisableAutoSearch">Search Field with auto-search turned off</h2>
    <SearchFieldDisableAutoSearch />
    <br />
    <h2 id="searchFieldFilterNumeric">Search Field with onChange event filtering numbers</h2>
    <SearchFieldFilterNumeric />
  </div>
);

export default SearchFieldExamples;
