import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name, version } from '../../../../package.json';

// Component Source
import FormInputSrc from '!raw-loader!../../../../src/Input';

// Example Files
import BlankExample from '../common/BlankExample';
import BlankExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/common/BlankExample';
import PlaceholderExample from '../common/PlaceholderExample';
import PlaceholderExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/common/PlaceholderExample';
import NumberInputExample from '../common/NumberInputExample';
import NumberInputExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/common/NumberInputExample';
import ControlledDefaultExample from '../example/controlled/DefaultExample';
import ControlledDefaultExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/controlled/DefaultExample';
import ControlledDisabledExample from '../example/controlled/DisabledExample';
import ControlledDisabledExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/controlled/DisabledExample';
import ControlledDefaultInvalidExample from '../example/controlled/DefaultInvalidExample';
import ControlledDefaultInvalidExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/controlled/DefaultInvalidExample';
import ControlledDisabledInvalidExample from '../example/controlled/DisabledInvalidExample';
import ControlledDisabledInvalidExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/controlled/DisabledInvalidExample';
import UncontrolledDefaultExample from '../example/uncontrolled/DefaultExample';
import UncontrolledDefaultExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/uncontrolled/DefaultExample';
import UncontrolledDisabledExample from '../example/uncontrolled/DisabledExample';
import UncontrolledDisabledExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/uncontrolled/DisabledExample';
import UncontrolledDefaultInvalidExample from '../example/uncontrolled/DefaultInvalidExample';
import UncontrolledDefaultInvalidExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/uncontrolled/DefaultInvalidExample';
import UncontrolledDisabledInvalidExample from '../example/uncontrolled/DisabledInvalidExample';
import UncontrolledDisabledInvalidExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/uncontrolled/DisabledInvalidExample';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
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
        title: 'Numeric Input',
        example: <NumberInputExample />,
        source: NumberInputExampleSrc,
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
