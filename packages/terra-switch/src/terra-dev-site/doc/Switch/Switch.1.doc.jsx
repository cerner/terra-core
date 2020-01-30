import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

// Component Source
import SwitchButtonSrc from '!raw-loader!../../../../src/SwitchButton';
import SwitchCheckBoxSrc from '!raw-loader!../../../../src/SwitchCheckBox';

// Example Files
import DefaultSwitchButton from '../example/DefaultSwitchButton';
import DefaultSwitchButtonSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultSwitchButton.jsx';
import DefaultSwitchCheckBox from '../example/DefaultSwitchCheckBox';
import DefaultSwitchCheckBoxSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultSwitchCheckBox.jsx';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Switch With Button',
        example: <DefaultSwitchButton />,
        source: DefaultSwitchButtonSrc,
      },
      {
        title: 'Switch With Checkbox',
        example: <DefaultSwitchCheckBox />,
        source: DefaultSwitchCheckBoxSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Switch-Button',
        componentSrc: SwitchButtonSrc,
      },

      {
        componentName: 'Switch-Checkbox',
        componentSrc: SwitchCheckBoxSrc,
      },
    ]}
  />
);

export default DocPage;
