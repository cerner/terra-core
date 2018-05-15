/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-embedded-content-consumer/docs/README.md';
import { name } from 'terra-embedded-content-consumer/package.json';
import { Consumer } from 'xfc';

// Component Source
import EmbeddedContentConsumerSrc from '!raw-loader!terra-embedded-content-consumer/src/EmbeddedContentConsumer.jsx';

// Example files
import BasicConsumer from './consumers/BasicConsumer';
import BasicConsumerSrc from '!raw-loader!./consumers/BasicConsumer';
import CustomEventConsumer from './consumers/CustomEventConsumer';
import CustomEventConsumerSrc from '!raw-loader!./consumers/CustomEventConsumer';
import CustomEventsConsumer from './consumers/CustomEventsConsumer';
import CustomEventsConsumerSrc from '!raw-loader!./consumers/CustomEventsConsumer';
import DataStatusConsumer from './consumers/DataStatusConsumer';
import DataStatusConsumerSrc from '!raw-loader!./consumers/DataStatusConsumer';
import FillConsumer from './consumers/FillConsumer';
import FillConsumerSrc from '!raw-loader!./consumers/FillConsumer';
import OnReadyConsumer from './consumers/OnReadyConsumer';
import OnReadyConsumerSrc from '!raw-loader!./consumers/OnReadyConsumer';

Consumer.init();

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Basic Embedded Content',
        example: <BasicConsumer />,
        source: BasicConsumerSrc,
      },
      {
        title: 'Filled Embedded Content',
        example: <FillConsumer />,
        source: FillConsumerSrc,
      },
      {
        title: 'Custom Event Embedded Content',
        example: <CustomEventConsumer />,
        source: CustomEventConsumerSrc,
      },
      {
        title: 'Custom Events Embedded Content',
        example: <CustomEventsConsumer />,
        source: CustomEventsConsumerSrc,
      },
      {
        title: 'Data Status Embedded Content',
        example: <DataStatusConsumer />,
        source: DataStatusConsumerSrc,
      },
      {
        title: 'On Ready Embedded Content',
        example: <OnReadyConsumer />,
        source: OnReadyConsumerSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Embedded Content Consumer',
        componentSrc: EmbeddedContentConsumerSrc,
      },
    ]}
  />
);

export default DocPage;
