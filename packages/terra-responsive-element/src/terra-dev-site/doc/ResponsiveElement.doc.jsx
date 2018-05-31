/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions, import/no-duplicates */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../docs/README.md';
import ResponsiveElementSrc from '!raw-loader!../../../src/ResponsiveElement';
import ResponsiveTableExample from './example/ResponsiveTable';
import ResponsiveTableExampleSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/ResponsiveTable';

const DocPage = () => (
  <DocTemplate
    packageName="terra-responsive-element"
    readme={ReadMe}
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-responsive-element"
    propsTables={[
      {
        componentName: 'Responsive Element',
        componentSrc: ResponsiveElementSrc,
      },
    ]}
    examples={[
      {
        title: 'Responsive Table',
        description: 'A table that will render as a list on small screen sizes.',
        example: <ResponsiveTableExample />,
        source: ResponsiveTableExampleSrc,
      },
    ]}
  />
);

export default DocPage;
