/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-duplicates, import/no-unresolved */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/SplitButton.md';
<<<<<<< HEAD
import SplitButtonPropsTable from '../../../../docs/SplitButton-props-table.md';
import ItemPropsTable from '../../../../docs/Item-props-table.md';
import { name, version } from '../../../../package.json';
=======
import { name, version } from '../../../../package.json';
>>>>>>> master

// Example Files
import DefaultSplitButton from '../example/DefaultSplitButton';
import DefaultSplitButtonSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultSplitButton.jsx';
import GhostSplitButton from '../example/GhostSplitButton';
import GhostSplitButtonSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/GhostSplitButton.jsx';
import DisabledSplitButton from '../example/DisabledSplitButton';
import DisabledSplitButtonSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DisabledSplitButton.jsx';
import BlockSplitButton from '../example/BlockSplitButton';
import BlockSplitButtonSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/BlockSplitButton.jsx';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default Split Button',
        example: <DefaultSplitButton />,
        source: DefaultSplitButtonSrc,
      },
      {
        title: 'Ghost Split Button',
        example: <GhostSplitButton />,
        source: GhostSplitButtonSrc,
      },
      {
        title: 'Disabled Split Button',
        example: <DisabledSplitButton />,
        source: DisabledSplitButtonSrc,
      },
      {
        title: 'Block Split Button',
        example: <BlockSplitButton />,
        source: BlockSplitButtonSrc,
      },
    ]}
    propsTablesMarkdown={[SplitButtonPropsTable, ItemPropsTable]}
  />
);

export default DocPage;
