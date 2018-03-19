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
import CardContentCentered from './CardContentCentered';

// Example Files

const CardExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable componentName="Card" id="props" src={CardSrc} />
    <PropsTable componentName="Card Body"src={CardBodySrc} />
    <h2 id="CardDefault">Card basic example</h2>
    <CardDefault />
    <h2 id="CardPadding">Card plus Card Body with default padding</h2>
    <CardPadding />
    <h2 id="CardPaddingVertical">Card plus Card Body with only vertical padding</h2>
    <CardPaddingVertical />
    <h2 id="CardPaddingHorizontal">Card plus Card Body with only horizontal padding</h2>
    <CardPaddingHorizontal />
    <h2 id="CardPaddingHR">Card plus padded and non-padded children</h2>
    <CardPaddingHR />
    <h2 id="CardContentCentered">Centered content inside card</h2>
    <CardContentCentered />
  </div>
);

export default CardExamples;
