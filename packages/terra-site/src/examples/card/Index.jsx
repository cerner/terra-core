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
import CardClick from './CardClick';

// Example Files

const CardExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={CardSrc} />
    <h2 id="CardDefault">Default Card Example</h2>
    <hr/>
    <CardDefault />
    <hr/>
    <h2 id="CardClick">Card Click Example</h2>
    <hr/>
    <CardClick />
    <hr/>

  </div>
);

export default CardExamples;
