/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-form-input/docs/README.md';
import { name } from 'terra-form-input/package.json';

// Component Source
import FormInputSrc from '!raw-loader!terra-form-input/src/Input';

// Example Files
import BlankExample from './examples/BlankExample';
import BlankExampleSrc from '!raw-loader!./examples/BlankExample';
import PlaceholderExample from './examples/PlaceholderExample';
import PlaceholderExampleSrc from '!raw-loader!./examples/PlaceholderExample';
import ControlledDefaultExample from './controlled_examples/DefaultExample';
import ControlledDefaultExampleSrc from '!raw-loader!./controlled_examples/DefaultExample';
import ControlledDisabledExample from './controlled_examples/DisabledExample';
import ControlledDisabledExampleSrc from '!raw-loader!./controlled_examples/DisabledExample';
import ControlledDefaultInvalidExample from './controlled_examples/DefaultInvalidExample';
import ControlledDefaultInvalidExampleSrc from '!raw-loader!./controlled_examples/DefaultInvalidExample';
import ControlledDisabledInvalidExample from './controlled_examples/DisabledInvalidExample';
import ControlledDisabledInvalidExampleSrc from '!raw-loader!./controlled_examples/DisabledInvalidExample';
import UncontrolledDefaultExample from './uncontrolled_examples/DefaultExample';
import UncontrolledDefaultExampleSrc from '!raw-loader!./uncontrolled_examples/DefaultExample';
import UncontrolledDisabledExample from './uncontrolled_examples/DisabledExample';
import UncontrolledDisabledExampleSrc from '!raw-loader!./uncontrolled_examples/DisabledExample';
import UncontrolledDefaultInvalidExample from './uncontrolled_examples/DefaultInvalidExample';
import UncontrolledDefaultInvalidExampleSrc from '!raw-loader!./uncontrolled_examples/DefaultInvalidExample';
import UncontrolledDisabledInvalidExample from './uncontrolled_examples/DisabledInvalidExample';
import UncontrolledDisabledInvalidExampleSrc from '!raw-loader!./uncontrolled_examples/DisabledInvalidExample';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default Input',
        example: <BlankExample />,
        source: BlankExampleSrc,
      },
      {
        title: 'Placeholder Input',
        example: <PlaceholderExample />,
        source: PlaceholderExampleSrc,
      },
      {
        title: 'Controlled Example - Valid',
        example: <ControlledDefaultExample />,
        source: ControlledDefaultExampleSrc,
      },
      {
        title: 'Controlled Example - Valid Disabled',
        example: <ControlledDisabledExample />,
        source: ControlledDisabledExampleSrc,
      },
      {
        title: 'Controlled Example - Invalid',
        example: <ControlledDefaultInvalidExample />,
        source: ControlledDefaultInvalidExampleSrc,
      },
      {
        title: 'Controlled Example - Invalid Disabled',
        example: <ControlledDisabledInvalidExample />,
        source: ControlledDisabledInvalidExampleSrc,
      },
      {
        title: 'Uncontrolled Example - Valid',
        example: <UncontrolledDefaultExample />,
        source: UncontrolledDefaultExampleSrc,
      },
      {
        title: 'Uncontrolled Example - Valid Disabled',
        example: <UncontrolledDisabledExample />,
        source: UncontrolledDisabledExampleSrc,
      },
      {
        title: 'Uncontrolled Example - Invalid',
        example: <UncontrolledDefaultInvalidExample />,
        source: UncontrolledDefaultInvalidExampleSrc,
      },
      {
        title: 'Uncontrolled Example - Invalid Disabled',
        example: <UncontrolledDisabledInvalidExample />,
        source: UncontrolledDisabledInvalidExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Form Input',
        componentSrc: FormInputSrc,
      },
    ]}
  />
);

export default DocPage;
