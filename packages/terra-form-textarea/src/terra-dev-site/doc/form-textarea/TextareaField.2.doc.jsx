import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/TextareaField.md';
import PropsTable from '../../../../docs/TextareaField-props-table.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
import TextareaFieldExample from '../example/TextareaField';
import TextareaFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TextareaField';
import RequiredTextareaFieldExample from '../example/RequiredTextareaField';
import RequiredTextareaFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/RequiredTextareaField';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    propsTablesMarkdown={[PropsTable]}
    examples={[
      {
        example: <TextareaFieldExample />,
        source: TextareaFieldExampleSrc,
      },
      {
        example: <RequiredTextareaFieldExample />,
        source: RequiredTextareaFieldExampleSrc,
      },
    ]}
  />
);

export default DocPage;
