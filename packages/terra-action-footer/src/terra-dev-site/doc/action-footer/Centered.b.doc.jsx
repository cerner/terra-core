import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/CenteredActionFooter.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import CenteredActionFooterSrc from '!raw-loader!../../../../src/CenteredActionFooter';

// Example Files
import EmptyExample from '../example/centered/Empty';
import EmptyExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/centered/Empty';
import SingleActionExample from '../example/centered/SingleAction';
import SingleActionExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/centered/SingleAction';
import MultipleActionsExample from '../example/centered/MultipleActions';
import MultipleActionsExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/centered/MultipleActions';
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
        componentName: 'Centered Action Footer',
        componentSrc: CenteredActionFooterSrc,
      },
    ]}
  />
);

export default DocPage;
