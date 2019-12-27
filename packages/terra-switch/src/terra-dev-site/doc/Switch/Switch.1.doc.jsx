import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

// Component Source
import SwitchSrc from '!raw-loader!../../../../src/Switch';

// Example Files
import DefaultSwitch from '../example/DefaultSwitch';
import DefaultSwitchSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultSwitch.jsx';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default Switch',
        example: <DefaultSwitch />,
        source: DefaultSwitchSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Switch',
        componentSrc: SwitchSrc,
      },
    ]}
  />
);

export default DocPage;
