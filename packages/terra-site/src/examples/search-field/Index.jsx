/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-search-field/docs/README.md';
import { name } from 'terra-search-field/package.json';

// Component Source
import SearchFieldSrc from '!raw-loader!terra-search-field/src/SearchField';

// Example Files
import SearchFieldBasic from './SearchFieldBasic';
import SearchFieldBasicSrc from '!raw-loader!./SearchFieldBasic';
import SearchFieldPlaceholder from './SearchFieldPlaceholder';
import SearchFieldPlaceholderSrc from '!raw-loader!./SearchFieldPlaceholder';
import SearchFieldMinimumLength from './SearchFieldMinimumLength';
import SearchFieldMinimumLengthSrc from '!raw-loader!./SearchFieldMinimumLength';
import SearchFieldDelayed from './SearchFieldDelayed';
import SearchFieldDelayedSrc from '!raw-loader!./SearchFieldDelayed';
import SearchFieldDefaultValue from './SearchFieldDefaultValue';
import SearchFieldDefaultValueSrc from '!raw-loader!./SearchFieldDefaultValue';
import SearchFieldDisabled from './SearchFieldDisabled';
import SearchFieldDisabledSrc from '!raw-loader!./SearchFieldDisabled';
import SearchFieldBlock from './SearchFieldBlock';
import SearchFieldBlockSrc from '!raw-loader!./SearchFieldBlock';
import SearchFieldDisableAutoSearch from './SearchFieldDisableAutoSearch';
import SearchFieldDisableAutoSearchSrc from '!raw-loader!./SearchFieldDisableAutoSearch';
import SearchFieldFilterNumeric from './SearchFieldFilterNumeric';
import SearchFieldFilterNumericSrc from '!raw-loader!./SearchFieldFilterNumeric';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Search Field',
        example: <SearchFieldBasic />,
        source: SearchFieldBasicSrc,
      },
      {
        title: 'Search Field with Placeholder Text',
        example: <SearchFieldPlaceholder />,
        source: SearchFieldPlaceholderSrc,
      },
      {
        title: 'Search Field with Minimum Search Text Length of 5 Characters',
        example: <SearchFieldMinimumLength />,
        source: SearchFieldMinimumLengthSrc,
      },
      {
        title: 'Search Field with Delay of 2000ms',
        example: <SearchFieldDelayed />,
        source: SearchFieldDelayedSrc,
      },
      {
        title: 'Search Field with a Default Value',
        example: <SearchFieldDefaultValue />,
        source: SearchFieldDefaultValueSrc,
      },
      {
        title: 'Search Field that is Disabled',
        example: <SearchFieldDisabled />,
        source: SearchFieldDisabledSrc,
      },
      {
        title: 'Search Field that Displays as Block Style to Fill Container',
        example: <SearchFieldBlock />,
        source: SearchFieldBlockSrc,
      },
      {
        title: 'Search Field with Auto-search Turned Off',
        example: <SearchFieldDisableAutoSearch />,
        source: SearchFieldDisableAutoSearchSrc,
      },
      {
        title: 'Search Field with onChange Event Filtering Numbers',
        example: <SearchFieldFilterNumeric />,
        source: SearchFieldFilterNumericSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Search Field',
        componentSrc: SearchFieldSrc,
      },
    ]}
  />
);

export default DocPage;
