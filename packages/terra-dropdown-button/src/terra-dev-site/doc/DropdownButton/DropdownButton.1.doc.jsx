/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-duplicates */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import DropdownPropsTable from '../../../../docs/DropdownButton-props-table.md';
import ItemPropsTable from '../../../../docs/Item-props-table.md';
import { name, version } from '../../../../package.json';

// Example Files
import DefaultDropdownButton from '../example/DefaultDropdownButton';
import DefaultDropdownButtonSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultDropdownButton.jsx';
import EmphasisDropdownButton from '../example/EmphasisDropdownButton';
import EmphasisDropdownButtonSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/EmphasisDropdownButton.jsx';
import GhostDropdownButton from '../example/GhostDropdownButton';
import GhostDropdownButtonSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/GhostDropdownButton.jsx';
import DisabledDropdownButton from '../example/DisabledDropdownButton';
import DisabledDropdownButtonSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DisabledDropdownButton.jsx';
import BlockDropdownButton from '../example/BlockDropdownButton';
import BlockDropdownButtonSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/BlockDropdownButton.jsx';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
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
        title: 'Ghost Dropdown Button',
        example: <GhostDropdownButton />,
        source: GhostDropdownButtonSrc,
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
    propsTablesMarkdown={[DropdownPropsTable, ItemPropsTable]}
  />
);

export default DocPage;
