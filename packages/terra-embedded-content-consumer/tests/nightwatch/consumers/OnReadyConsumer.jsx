/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Consumer } from 'xfc';
import EmbeddedContentConsumer from '../../../lib/EmbeddedContentConsumer';

Consumer.init();

const OnReadyConsumer = () => (
  <EmbeddedContentConsumer
    src="#/tests/embedded-content-consumer-tests/on-ready-provider"
  />
);

export default OnReadyConsumer;
