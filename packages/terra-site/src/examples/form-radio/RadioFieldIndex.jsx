/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-form-radio/docs/RadioField.md';
import IndexTemplate from 'terra-dev-site/src/IndexPageTemplate';

// Component Source
import RadioFieldSrc from '!raw-loader!terra-form-radio/src/RadioField';

// Examples
import DefaultRadioField from './radio_field_examples/DefaultRadioField';
import DefaultRadioFieldSrc from '!raw-loader!./radio_field_examples/DefaultRadioField.jsx';

import ControlledRadioField from './radio_field_examples/ControlledRadioField';
import ControlledRadioFieldSrc from '!raw-loader!./radio_field_examples/ControlledRadioField.jsx';

import OptionalRadioField from './radio_field_examples/OptionalRadioField';
import OptionalRadioFieldSrc from '!raw-loader!./radio_field_examples/OptionalRadioField.jsx';

const RadioFieldExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={RadioFieldSrc} />
    <IndexTemplate
      title="Default RadioField Example"
      example={<DefaultRadioField />}
      exampleSrc={DefaultRadioFieldSrc}
    />
    <IndexTemplate
      title="Controlled RadioField Example"
      example={<ControlledRadioField />}
      exampleSrc={ControlledRadioFieldSrc}
    />
    <IndexTemplate
      title="Optional RadioField Example"
      example={<OptionalRadioField />}
      exampleSrc={OptionalRadioFieldSrc}
    />
  </div>
);

export default RadioFieldExamples;
