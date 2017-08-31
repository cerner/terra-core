import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-embedded-content-consumer/docs/README.md';
import { version } from 'terra-embedded-content-consumer/package.json';
import { Consumer } from 'xfc';

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import EmbeddedContentConsumerSrc from '!raw-loader!terra-embedded-content-consumer/src/EmbeddedContentConsumer.jsx';
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

// Example files
import BasicConsumer from './consumers/BasicConsumer';
import CustomEventConsumer from './consumers/CustomEventConsumer';
import CustomEventsConsumer from './consumers/CustomEventsConsumer';
import DataStatusConsumer from './consumers/DataStatusConsumer';
import FillConsumer from './consumers/FillConsumer';
import OnReadyConsumer from './consumers/OnReadyConsumer';

Consumer.init();

const EmbeddedContentConsumerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2>Embedded Content Consumer</h2>
    <PropsTable id="embedded_content_consumer_props" src={EmbeddedContentConsumerSrc} />
    <h2 id="Basic Embedded Content">Basic Embedded Content</h2>
    <BasicConsumer />
    <h2 id="Filled Embedded Content">Filled Embedded Content</h2>
    <FillConsumer />
    <h2 id="Custom Event Embedded Content">Custom Event Embedded Content</h2>
    <CustomEventConsumer />
    <h2 id="Custom Events Embedded Content">Custom Events Embedded Content</h2>
    <CustomEventsConsumer />
    <h2 id="Data status Embedded Content">Data Status Embedded Content</h2>
    <DataStatusConsumer />
    <h2 id="On Ready Embedded Content">On Ready Embedded Content</h2>
    <OnReadyConsumer />
  </div>
);

export default EmbeddedContentConsumerExamples;
