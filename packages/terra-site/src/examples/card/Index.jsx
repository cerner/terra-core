/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-card/docs/README.md';
import { version } from 'terra-card/package.json';

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import CardSrc from '!raw-loader!terra-card/src/Card';
import CardBodySrc from '!raw-loader!terra-card/src/CardBody';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import CardDefault from './CardDefault';
import CardPadding from './CardPadding';
import CardPaddingVertical from './CardPaddingVertical';
import CardPaddingHorizontal from './CardPaddingHorizontal';
import CardPaddingHR from './CardPaddingHR';

// Example Files

const CardExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable componentName="Card" id="props" src={CardSrc} />
    <PropsTable componentName="Card Body"src={CardBodySrc} />
    <h2 id="CardDefault">Basic Hello World with defaults</h2>
    <CardDefault />
    <h2 id="CardPadding">We can add padding</h2>
    <CardPadding />
    <h2 id="CardPaddingVertical">Or just vertical</h2>
    <CardPaddingVertical />
    <h2 id="CardPaddingHorizontal">Or just horizontal</h2>
    <CardPaddingHorizontal />
    <h2 id="CardPaddingHR">We can selectively apply padding to the child elements</h2>
    <CardPaddingHR />
  </div>
);

export default CardExamples;
