import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../docs/README.md';
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
import ResponsiveElementSrc from '!raw-loader!../../../src/ResponsiveElement';
import ResponsiveTableExample from './example/ResponsiveTable';
import ResponsiveTableExampleSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/ResponsiveTable';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

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
