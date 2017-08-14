/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-card/docs/README.md';
import { version } from 'terra-card/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import CardSrc from '!raw-loader!terra-card/src/Card';
import CardDefault from './CardDefault';
import CardPadding from './CardPadding';
import CardPaddingVertical from './CardPaddingVertical';
import CardPaddingHorizontal from './CardPaddingHorizontal';

// Example Files

const CardExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={CardSrc} />
    <h2 style={{ padding: '10px' }} id="CardDefault">Basic Hello World with defaults</h2>
    <CardDefault />
    <h2 style={{ padding: '10px' }} id="CardPadding">We Can Add Padding</h2>
    <CardPadding />
    <h2 style={{ padding: '10px' }} id="CardPaddingVertical">Or Just Vertical</h2>
    <CardPaddingVertical />
    <h2 style={{ padding: '10px' }} id="CardPaddingHorizontal">Or Just Horizontal</h2>
    <CardPaddingHorizontal />
  </div>
);

export default CardExamples;
