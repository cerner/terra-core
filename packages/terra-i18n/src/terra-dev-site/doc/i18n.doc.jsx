/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-i18n/docs/README.md';
import { name } from 'terra-i18n/package.json';

// Component Source
import I18nProvider from '!raw-loader!terra-i18n/src/I18nProvider';

// Example Files
import I18nDemo from './example/I18nDemo';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'I18nProvider Example',
        description: (<p style={{ fontStyle: 'italic' }}><span style={{ fontWeight: 'bold' }}>Note:</span> This is an example of a nested I18nProvider. The site overall is an example of using an application-level I18nProvider implemented through the terra-base component.</p>),
        example: <I18nDemo />,
      },
    ]}
    propsTables={[
      {
        componentName: 'I18n Provider',
        componentSrc: I18nProvider,
      },
    ]}
  />
);

export default DocPage;
