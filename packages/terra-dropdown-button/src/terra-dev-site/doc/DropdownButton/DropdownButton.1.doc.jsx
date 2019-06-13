/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-duplicates, import/no-unresolved */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

// Component Source
import DropdownButtonSrc from '!raw-loader!../../../../src/DropdownButton';

// Example Files
import DefaultDropdownButton from '../example/DefaultDropdownButton';
import DefaultDropdownButtonSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultDropdownButton.jsx';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default DropdownButton',
        example: <DefaultDropdownButton />,
        source: DefaultDropdownButtonSrc,
      },
    ]}
    propsTables={[
        {
          componentName: 'DropdownButton',
          componentSrc: DropdownButtonSrc,
        },
    ]}
  />
);

export default DocPage;
