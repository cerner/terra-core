import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/RadioField.md';
import { name, version } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-duplicates */
// Component Source
import RadioFieldSrc from '!raw-loader!../../../../src/RadioField';

// Examples
import DefaultRadioField from '../example/field/DefaultRadioField';
import DefaultRadioFieldSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/field/DefaultRadioField';
import ControlledRadioField from '../example/field/ControlledRadioField';
import ControlledRadioFieldSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/field/ControlledRadioField';
import InlineRadioField from '../example/field/InlineRadioField';
import InlineRadioFieldSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/field/InlineRadioField';
import OptionalRadioField from '../example/field/OptionalRadioField';
import OptionalRadioFieldSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/field/OptionalRadioField';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-duplicates */

const RadioFieldExamples = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
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
      {
        title: 'Inline RadioField Example',
        example: <InlineRadioField />,
        source: InlineRadioFieldSrc,
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
