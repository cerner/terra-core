import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-button/docs/README.md';
import { version } from 'terra-button/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ButtonSrc from '!raw-loader!terra-button/src/Button';

// Example Files
import ButtonBlock from './ButtonBlock';
import ButtonAnchor from './ButtonAnchor';
import ButtonDisabled from './ButtonDisabled';
import ButtonOnClick from './ButtonOnClick';
import ButtonIcon from './ButtonIcon';
import ButtonVariant from './ButtonVariant';

const ButtonExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ButtonSrc} />
    <h2 id="variant">Variant</h2>
    <ButtonVariant />
    <h2 id="block">Block</h2>
    <ButtonBlock />
    <h2 id="anchor">Anchor</h2>
    <ButtonAnchor />
    <h2 id="disabled">Disabled</h2>
    <ButtonDisabled />
    <h2 id="on-click">OnClick</h2>
    <ButtonOnClick />
    <h2 id="icon">Icon</h2>
    <ButtonIcon />
  </div>
);

export default ButtonExamples;
