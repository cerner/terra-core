/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-form-checkbox/docs/CheckboxField.md';

// Component Source
import CheckboxFieldSrc from '!raw-loader!terra-form-checkbox/src/CheckboxField';

// Examples
import DefaultCheckboxField from './checkbox_field_examples/DefaultCheckboxField';
import DefaultCheckboxFieldSrc from '!raw-loader!./checkbox_field_examples/DefaultCheckboxField.jsx';

import ControlledCheckboxField from './checkbox_field_examples/ControlledCheckboxField';
import ControlledCheckboxFieldSrc from '!raw-loader!./checkbox_field_examples/ControlledCheckboxField.jsx';

import OptionalCheckboxField from './checkbox_field_examples/OptionalCheckboxField';
import OptionalCheckboxFieldSrc from '!raw-loader!./checkbox_field_examples/OptionalCheckboxField.jsx';

const checkboxFieldExamples = () => (
  <DocTemplate
    id="props"
    readme={ReadMe}
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-form-checkbox/src/CheckboxField.jsx"
    examples={[
      {
        title: 'Basic Form Validation Example',
        example: <DefaultCheckboxField />,
        exampleSrc: DefaultCheckboxFieldSrc,
      },
      {
        title: 'Optional CheckboxField Example',
        example: <OptionalCheckboxField />,
        exampleSrc: OptionalCheckboxFieldSrc,
      },
      {
        title: 'Controlled CheckboxField Example',
        example: <ControlledCheckboxField />,
        exampleSrc: ControlledCheckboxFieldSrc,
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
