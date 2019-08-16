import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/CheckboxField.md';
import { name, version } from '../../../../package.json';

// Component Source
import CheckboxFieldSrc from '!raw-loader!../../../../src/CheckboxField';

// Examples
import DefaultCheckboxField from '../example/field/DefaultCheckboxField';
import DefaultCheckboxFieldSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/field/DefaultCheckboxField';
import ControlledCheckboxField from '../example/field/ControlledCheckboxField';
import ControlledCheckboxFieldSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/field/ControlledCheckboxField';
import InlineCheckboxField from '../example/field/InlineCheckboxField';
import InlineCheckboxFieldSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/field/InlineCheckboxField';
import OptionalCheckboxField from '../example/field/OptionalCheckboxField';
import OptionalCheckboxFieldSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/field/OptionalCheckboxField';

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
    propsTables={[
      {
        componentName: 'CheckboxField',
        componentSrc: CheckboxFieldSrc,
      },
    ]}
  />
);

export default checkboxFieldExamples;
