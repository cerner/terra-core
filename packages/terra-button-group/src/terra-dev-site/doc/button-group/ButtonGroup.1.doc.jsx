import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import ButtonGroupSrc from '!raw-loader!../../../../src/ButtonGroup.jsx';
import ButtonGroupButtonSrc from '!raw-loader!../../../../src/ButtonGroupButton.jsx';

// Examples
import ButtonGroupWithIcons from '../example/ButtonGroupWithIcons';
import ButtonGroupWithIconsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ButtonGroupWithIcons';
import ButtonGroupDisabledButtons from '../example/ButtonGroupDisabledButtons';
import ButtonGroupDisabledButtonsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ButtonGroupDisabledButtons';
import ButtonGroupSingleSelect from '../example/ButtonGroupSingleSelect';
import ButtonGroupSingleSelectSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ButtonGroupSingleSelect';
import ButtonGroupMultiSelect from '../example/ButtonGroupMultiSelect';
import ButtonGroupMultiSelectSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ButtonGroupMultiSelect';
import ButtonGroupIsBlock from '../example/ButtonGroupIsBlock';
import ButtonGroupIsBlockSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ButtonGroupIsBlock';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Text and Icon - Default, no selected state',
        example: <ButtonGroupWithIcons />,
        source: ButtonGroupWithIconsSrc,
      },
      {
        title: 'Single Select - Manage single button selection',
        example: <ButtonGroupSingleSelect />,
        source: ButtonGroupSingleSelectSrc,
      },
      {
        title: 'Multi Select - Manage multiple button selections',
        example: <ButtonGroupMultiSelect />,
        source: ButtonGroupMultiSelectSrc,
      },
      {
        title: 'Disabled Buttons - Default, no selected state',
        example: <ButtonGroupDisabledButtons />,
        source: ButtonGroupDisabledButtonsSrc,
      },
      {
        title: 'ButtonGroup Is Block - width stretches to fill container',
        example: <ButtonGroupIsBlock />,
        source: ButtonGroupIsBlockSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Button Group',
        componentSrc: ButtonGroupSrc,
      },
      {
        componentName: 'Button Group Button',
        componentSrc: ButtonGroupButtonSrc,
      },
    ]}
  />
);

export default DocPage;
