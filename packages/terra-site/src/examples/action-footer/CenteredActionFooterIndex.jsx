/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-action-footer/docs/CenteredActionFooter.md';
import { name } from 'terra-action-footer/package.json';

// Component Source
import CenteredActionFooterSrc from '!raw-loader!terra-action-footer/src/CenteredActionFooter';

// Example Files
import EmptyExample from './examples/centered-action-footer/Empty';
import EmptyExampleSrc from '!raw-loader!./examples/centered-action-footer/Empty';
import SingleActionExample from './examples/centered-action-footer/SingleAction';
import SingleActionExampleSrc from '!raw-loader!./examples/centered-action-footer/SingleAction';
import MultipleActionsExample from './examples/centered-action-footer/MultipleActions';
import MultipleActionsExampleSrc from '!raw-loader!./examples/centered-action-footer/MultipleActions';

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
        componentName: 'Centered Action Footer',
        componentSrc: CenteredActionFooterSrc,
      },
    ]}
  />
);

export default DocPage;
