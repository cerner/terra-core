import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/BlockActionFooter.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import BlockActionFooterSrc from '!raw-loader!../../../../src/BlockActionFooter';

// Example Files
import EmptyExample from '../example/block/Empty';
import EmptyExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/block/Empty';
import SingleActionExample from '../example/block/SingleAction';
import SingleActionExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/block/SingleAction';
import MultipleActionsExample from '../example/block/MultipleActions';
import MultipleActionsExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/block/MultipleActions';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Empty',
        example: <EmptyExample />,
        source: EmptyExampleSrc,
      },
      {
        title: 'Single Action',
        example: <SingleActionExample />,
        source: SingleActionExampleSrc,
      },
      {
        title: 'Multiple Actions',
        example: <MultipleActionsExample />,
        source: MultipleActionsExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Block Action Footer',
        componentSrc: BlockActionFooterSrc,
      },
    ]}
  />
);

export default DocPage;
