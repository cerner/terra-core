/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-duplicates, import/no-unresolved */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

// Component Source
import DropdownButtonSrc from '!raw-loader!../../../../src/DropdownButton';

// Example Files
import DefaultSplitButton from '../example/DefaultSplitButton';
import DefaultSplitButtonSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultSplitButton.jsx';
import DisabledSplitButton from '../example/DisabledSplitButton';
import DisabledSplitButtonSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DisabledSplitButton.jsx';
import BoundedSplitButton from '../example/BoundedSplitButton';
import BoundedSplitButtonSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/BoundedSplitButton.jsx';
import EmphasisSplitButton from '../example/EmphasisSplitButton';
import EmphasisSplitButtonSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/EmphasisSplitButton.jsx';
import SetWidthSplitButton from '../example/SetWidthSplitButton';
import SetWidthSplitButtonSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/SetWidthSplitButton.jsx';
import BlockSplitButton from '../example/BlockSplitButton';
import BlockSplitButtonSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/BlockSplitButton.jsx';
import DefaultDropdownButton from '../example/DefaultDropdownButton';
import DefaultDropdownButtonSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultDropdownButton.jsx';
import EmphasisDropdownButton from '../example/EmphasisDropdownButton';
import EmphasisDropdownButtonSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/EmphasisDropdownButton.jsx';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default Split Button',
        example: <DefaultSplitButton />,
        source: DefaultSplitButtonSrc,
      },
      {
        title: 'Default Dropdown Button',
        example: <DefaultDropdownButton />,
        source: DefaultDropdownButtonSrc,
      },
      {
        title: 'Emphasis Split Button',
        example: <EmphasisSplitButton />,
        source: EmphasisSplitButtonSrc,
      },
      {
        title: 'Emphasis Dropdown Button',
        example: <EmphasisDropdownButton />,
        source: EmphasisDropdownButtonSrc,
      },
      {
        title: 'Bounded Split Button',
        example: <BoundedSplitButton />,
        source: BoundedSplitButtonSrc,
      },
      {
        title: 'Disabled Split Button',
        example: <DisabledSplitButton />,
        source: DisabledSplitButtonSrc,
      },
      {
        title: 'Set Width Split Button',
        example: <SetWidthSplitButton />,
        source: SetWidthSplitButtonSrc,
      },
      {
        title: 'Block Split Button',
        example: <BlockSplitButton />,
        source: BlockSplitButtonSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Dropdown Button',
        componentSrc: DropdownButtonSrc,
      },
    ]}
  />
);

export default DocPage;
