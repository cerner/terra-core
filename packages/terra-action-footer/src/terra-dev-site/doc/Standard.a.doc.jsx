/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-action-footer/docs/README.md';
import { name } from 'terra-action-footer/package.json';

// Component Source
import ActionFooterSrc from '!raw-loader!terra-action-footer/src/ActionFooter';

// Example Files
import EmptyExample from './examples/action-footer/Empty';
import EmptyExampleSrc from '!raw-loader!./examples/action-footer/Empty';
import SingleStartActionExample from './examples/action-footer/SingleStartAction';
import SingleStartActionExampleSrc from '!raw-loader!./examples/action-footer/SingleStartAction';
import SingleEndActionExample from './examples/action-footer/SingleEndAction';
import SingleEndActionExampleSrc from '!raw-loader!./examples/action-footer/SingleEndAction';
import MultipleStartEndActionsExample from './examples/action-footer/MultipleStartEndActions';
import MultipleStartEndActionsExampleSrc from '!raw-loader!./examples/action-footer/MultipleStartEndActions';

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
