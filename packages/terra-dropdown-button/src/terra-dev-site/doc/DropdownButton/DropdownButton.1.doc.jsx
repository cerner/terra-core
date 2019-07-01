/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-duplicates, import/no-unresolved */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/DropdownButton.md';
import { name } from '../../../../package.json';

// Component Source
import DropdownButtonSrc from '!raw-loader!../../../../src/DropdownButton';
import ButtonSrc from '!raw-loader!../../../../src/Button';

// Example Files
import DefaultDropdownButton from '../example/DefaultDropdownButton';
import DefaultDropdownButtonSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultDropdownButton.jsx';
import EmphasisDropdownButton from '../example/EmphasisDropdownButton';
import EmphasisDropdownButtonSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/EmphasisDropdownButton.jsx';
import DisabledDropdownButton from '../example/DisabledDropdownButton';
import DisabledDropdownButtonSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DisabledDropdownButton.jsx';
import BlockDropdownButton from '../example/BlockDropdownButton';
import BlockDropdownButtonSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/BlockDropdownButton.jsx';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default Dropdown Button',
        example: <DefaultDropdownButton />,
        source: DefaultDropdownButtonSrc,
      },
      {
        title: 'Emphasis Dropdown Button',
        example: <EmphasisDropdownButton />,
        source: EmphasisDropdownButtonSrc,
      },
      {
        title: 'Disabled Dropdown Button',
        example: <DisabledDropdownButton />,
        source: DisabledDropdownButtonSrc,
      },
      {
        title: 'Block Dropdown Button',
        example: <BlockDropdownButton />,
        source: BlockDropdownButtonSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Dropdown Button',
        componentSrc: DropdownButtonSrc,
      },
      {
        componentName: 'Button',
        componentSrc: ButtonSrc,
      },
    ]}
  />
);

export default DocPage;
