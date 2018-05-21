/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-duplicates */
import React from 'react';
import ReadMe from '../../../docs/RadioField.md';
import DocTemplate from 'terra-doc-template';

// Component Source
import RadioFieldSrc from '!raw-loader!../../../src/RadioField';

// Examples
import DefaultRadioField from './example/field/DefaultRadioField';
import DefaultRadioFieldSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/field/DefaultRadioField';

import ControlledRadioField from './example/field/ControlledRadioField';
import ControlledRadioFieldSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/field/ControlledRadioField';

import OptionalRadioField from './example/field/OptionalRadioField';
import OptionalRadioFieldSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/field/OptionalRadioField';

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
