/* eslint-disable import/no-webpack-loader-syntax, import/first */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/TagSelectField.md';

import { name, version } from '../../../../package.json';

// Example Files
import TagSelectFieldPropsTable from '!terra-props-table-loader!../../../../src/TagSelectField';
import TagSelectFieldSrc from '!raw-loader!../../../../src/TagSelectField';
import SelectFieldExample from '../example/tag/TagSelectField';
import SelectFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/tag/TagSelectField';
import RequiredTagSelectFieldExample from '../example/tag/RequiredTagSelectField';
import RequiredTagSelectFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/tag/RequiredTagSelectField';
import IncompleteSelectFieldExample from '../example/tag/IncompleteTagSelectField';
import IncompleteSelectFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/tag/IncompleteTagSelectField';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    propsTables={[
      {
        componentName: 'Tag Select Field',
        componentSrc: TagSelectFieldSrc,
        componentProps: TagSelectFieldPropsTable,
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
    }, {
      title: 'Incomplete Tag Select Field Example',
      description: 'Applies theme-specific styling for incomplete. ***Note: Only use incomplete if given specific guidance, reserved for specific applications when no value has been provided. Not for general use.***',
      example: <IncompleteSelectFieldExample />,
      source: IncompleteSelectFieldExampleSrc,
    }]}
  />
);

export default DocPage;
