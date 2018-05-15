/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import ReadMe from 'terra-form-radio/docs/RadioField.md';
import DocTemplate from 'terra-doc-template';

// Component Source
import RadioFieldSrc from '!raw-loader!terra-form-radio/src/RadioField';

// Examples
import DefaultRadioField from './radio_field_examples/DefaultRadioField';
import DefaultRadioFieldSrc from '!raw-loader!./radio_field_examples/DefaultRadioField';

import ControlledRadioField from './radio_field_examples/ControlledRadioField';
import ControlledRadioFieldSrc from '!raw-loader!./radio_field_examples/ControlledRadioField';

import OptionalRadioField from './radio_field_examples/OptionalRadioField';
import OptionalRadioFieldSrc from '!raw-loader!./radio_field_examples/OptionalRadioField';

const RadioFieldExamples = () => (
  <DocTemplate
    id="props"
    readme={ReadMe}
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-form-radio/src/RadioField.jsx"
    examples={[
      {
        title: 'Default RadioField Example',
        example: <DefaultRadioField />,
        source: DefaultRadioFieldSrc,
      },
      {
        title: 'Optional RadioField Example',
        example: <OptionalRadioField />,
        source: OptionalRadioFieldSrc,
      },
      {
        title: 'Controlled RadioField Example',
        example: <ControlledRadioField />,
        source: ControlledRadioFieldSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'RadioField',
        componentSrc: RadioFieldSrc,
      },
    ]}
  />
);

export default RadioFieldExamples;
