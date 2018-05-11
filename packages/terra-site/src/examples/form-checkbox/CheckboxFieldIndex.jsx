/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-form-checkbox/docs/CheckboxField.md';
import IndexTemplate from 'terra-dev-site/src/IndexPageTemplate';

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
  <div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={CheckboxFieldSrc} />
    <IndexTemplate
      title="Basic Form Validation Example"
      example={<DefaultCheckboxField />}
      exampleSrc={DefaultCheckboxFieldSrc}
    />
    <IndexTemplate
      title="Optional CheckboxField Example"
      example={<OptionalCheckboxField />}
      exampleSrc={OptionalCheckboxFieldSrc}
    />
    <IndexTemplate
      title="Controlled CheckboxField Example"
      example={<ControlledCheckboxField />}
      exampleSrc={ControlledCheckboxFieldSrc}
    />
  </div>
);

export default checkboxFieldExamples;
