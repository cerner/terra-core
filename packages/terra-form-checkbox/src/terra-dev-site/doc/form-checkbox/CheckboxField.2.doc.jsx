import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/CheckboxField.md';
import PropsTable from '../../../../docs/CheckboxField-props-table.md';
import { name, version } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Examples
import DefaultCheckboxField from '../example/field/DefaultCheckboxField';
import DefaultCheckboxFieldSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/field/DefaultCheckboxField';
import ControlledCheckboxField from '../example/field/ControlledCheckboxField';
import ControlledCheckboxFieldSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/field/ControlledCheckboxField';
import InlineCheckboxField from '../example/field/InlineCheckboxField';
import InlineCheckboxFieldSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/field/InlineCheckboxField';
import OptionalCheckboxField from '../example/field/OptionalCheckboxField';
import OptionalCheckboxFieldSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/field/OptionalCheckboxField';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const checkboxFieldExamples = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-form-checkbox/src/CheckboxField.jsx"
    examples={[
      {
        title: 'Default CheckboxField Example',
        example: <DefaultCheckboxField />,
        source: DefaultCheckboxFieldSrc,
      },
      {
        title: 'Optional CheckboxField Example',
        example: <OptionalCheckboxField />,
        source: OptionalCheckboxFieldSrc,
      },
      {
        title: 'Controlled CheckboxField Example',
        example: <ControlledCheckboxField />,
        source: ControlledCheckboxFieldSrc,
      },
      {
        title: 'Inline CheckboxField Example',
        example: <InlineCheckboxField />,
        source: InlineCheckboxFieldSrc,
      },
    ]}
    propsTablesMarkdown={[PropsTable]}
  />
);

export default checkboxFieldExamples;
