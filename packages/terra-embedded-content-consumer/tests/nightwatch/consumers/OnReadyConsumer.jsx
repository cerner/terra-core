/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Consumer } from 'xfc';
import EmbeddedContentConsumer from '../../../lib/EmbeddedContentConsumer';

Consumer.init();

const OnReadyConsumer = () => (
  <EmbeddedContentConsumer
    src="#/raw/tests/embedded-content-consumer/providers/on-ready-provider"
  />
);

export default OnReadyConsumer;
