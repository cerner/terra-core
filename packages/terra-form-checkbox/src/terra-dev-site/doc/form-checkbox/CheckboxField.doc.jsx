import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/CheckboxField.md';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved */
// Component Source
import CheckboxFieldSrc from '!raw-loader!../../../src/CheckboxField';

// Examples
import DefaultCheckboxField from '../example/field/DefaultCheckboxField';
import DefaultCheckboxFieldSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/field/DefaultCheckboxField';
import ControlledCheckboxField from '../example/field/ControlledCheckboxField';
import ControlledCheckboxFieldSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/field/ControlledCheckboxField';
import OptionalCheckboxField from '../example/field/OptionalCheckboxField';
import OptionalCheckboxFieldSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/field/OptionalCheckboxField';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved */

const checkboxFieldExamples = () => (
  <DocTemplate
    id="props"
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
    ]}
    propsTables={[
      {
        componentName: 'CheckboxField',
        componentSrc: CheckboxFieldSrc,
      },
    ]}
  />
);

export default checkboxFieldExamples;
