/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Consumer } from 'xfc';
import EmbeddedContentConsumer from '../../../../EmbeddedContentConsumer';

Consumer.init();

const OnReadyConsumer = () => (
  <EmbeddedContentConsumer
    src="#/raw/tests/terra-embedded-content-consumer/embedded-content-consumer/providers/on-ready-provider"
  />
);

export default OnReadyConsumer;
