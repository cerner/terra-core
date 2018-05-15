/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-button/docs/README.md';
import { name } from 'terra-button/package.json';

// Component Source
import ButtonSrc from '!raw-loader!terra-button/src/Button';

// Example Files
import ButtonBlock from './ButtonBlock';
import ButtonBlockSrc from '!raw-loader!./ButtonBlock';
import ButtonAnchor from './ButtonAnchor';
import ButtonAnchorSrc from '!raw-loader!./ButtonAnchor';
import ButtonDisabled from './ButtonDisabled';
import ButtonDisabledSrc from '!raw-loader!./ButtonDisabled';
import ButtonOnClick from './ButtonOnClick';
import ButtonOnClickSrc from '!raw-loader!./ButtonOnClick';
import ButtonIcon from './ButtonIcon';
import ButtonIconSrc from '!raw-loader!./ButtonIcon';
import ButtonVariant from './ButtonVariant';
import ButtonVariantSrc from '!raw-loader!./ButtonVariant';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Variant',
        example: <ButtonVariant />,
        source: ButtonVariantSrc,
      },
      {
        title: 'Block',
        example: <ButtonBlock />,
        source: ButtonBlockSrc,
      },
      {
        title: 'Anchor',
        example: <ButtonAnchor />,
        source: ButtonAnchorSrc,
      },
      {
        title: 'Disabled',
        example: <ButtonDisabled />,
        source: ButtonDisabledSrc,
      },
      {
        title: 'OnClick',
        example: <ButtonOnClick />,
        source: ButtonOnClickSrc,
      },
      {
        title: 'Icon',
        example: <ButtonIcon />,
        source: ButtonIconSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Button',
        componentSrc: ButtonSrc,
      },
    ]}
  />
);

export default DocPage;
