/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-card/docs/README.md';
import { version } from 'terra-card/package.json';
import Card from 'terra-card';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import CardSrc from '!raw-loader!terra-card/src/Card';
import CardDefault from './CardDefault';
import CardWithHorizontal from './CardWithHorizontal';
import CardHorizontalNoPadding from './CardHorizontalNoPadding';
import CardDefaultNoPadding from './CardDefaultNoPadding'

// Example Files

const CardExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={CardSrc} />
    <h2 id="CardDefault">Basic Hello World with defaults</h2>
    <CardDefault />
    <h2 style={{padding:'10px'}} id="CardWithHorizontal">Look, Horizontal rules can be set to obey the padding</h2>
    <CardWithHorizontal />
    <h2 style={{padding:'10px'}} id="CardWithHorizontal">Or they can go all the way to the edge</h2>
    <CardHorizontalNoPadding />
    <h2 style={{padding:'10px'}} id="CardDefaultNoPadding">You want no padding? We gotcha</h2>
    <CardDefaultNoPadding />
  </div>
);

export default CardExamples;
