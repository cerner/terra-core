import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import ActionFooterSrc from '!raw-loader!../../../../src/ActionFooter';

// Example Files
import EmptyExample from '../example/standard/Empty';
import EmptyExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/standard/Empty';
import SingleStartActionExample from '../example/standard/SingleStartAction';
import SingleStartActionExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/standard/SingleStartAction';
import SingleEndActionExample from '../example/standard/SingleEndAction';
import SingleEndActionExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/standard/SingleEndAction';
import MultipleStartEndActionsExample from '../example/standard/MultipleStartEndActions';
import MultipleStartEndActionsExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/standard/MultipleStartEndActions';
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
        title: 'Single Start Action',
        example: <SingleStartActionExample />,
        source: SingleStartActionExampleSrc,
      },
      {
        title: 'Single End Action',
        example: <SingleEndActionExample />,
        source: SingleEndActionExampleSrc,
      },
      {
        title: 'Multiple Start and End Actions',
        example: <MultipleStartEndActionsExample />,
        source: MultipleStartEndActionsExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Action Footer',
        componentSrc: ActionFooterSrc,
      },
    ]}
  />
);

export default DocPage;
