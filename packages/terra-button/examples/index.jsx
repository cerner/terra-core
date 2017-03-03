/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from '../../../packages/terra-site/src/PropsTable';
import Markdown from '../../../packages/terra-site/src/Markdown';
import ReadMe from '../docs/README.md';
// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ButtonSrc from '!raw-loader!../src/Button.jsx';
// Example Files
import ButtonIntent from './ButtonIntent';
import ButtonOutline from './ButtonOutline';
import ButtonLink from './ButtonLink';
import ButtonSize from './ButtonSize';
import ButtonBlock from './ButtonBlock';
import ButtonAnchor from './ButtonAnchor';
import ButtonDisabled from './ButtonDisabled';
import ButtonOnClick from './ButtonOnClick';
import ButtonIcon from './ButtonIcon';

const ButtonExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ButtonSrc} />
    <h2 id="intent">Intent</h2>
    <ButtonIntent />
    <h2 id="outline-variant">Outline Variant</h2>
    <ButtonOutline />
    <h2 id="link-variant">Link Variant</h2>
    <ButtonLink />
    <h2 id="size">Size</h2>
    <ButtonSize />
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
