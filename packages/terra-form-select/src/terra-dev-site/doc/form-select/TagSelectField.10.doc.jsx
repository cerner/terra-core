/* eslint-disable import/no-webpack-loader-syntax, import/first */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/TagSelectField.md';

import { name, version } from '../../../../package.json';

// Example Files
import SelectFieldExample from '../example/tag/TagSelectField';
import SelectFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/tag/TagSelectField';
import RequiredTagSelectFieldExample from '../example/tag/RequiredTagSelectField';
import RequiredTagSelectFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/tag/RequiredTagSelectField';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    propsTables={[
      {
        componentName: '',
        componentSrc: '',
        componentProps: '',
      },
    ]}
    examples={[{
      title: 'Tag Select Field Example',
      example: <SelectFieldExample />,
      source: SelectFieldExampleSrc,
    }, {
      title: 'Required Tag Select Field Example',
      example: <RequiredTagSelectFieldExample />,
      source: RequiredTagSelectFieldExampleSrc,
    }]}
  />
);

export default DocPage;
