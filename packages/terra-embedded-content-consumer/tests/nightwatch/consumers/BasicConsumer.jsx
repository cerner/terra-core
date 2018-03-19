/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Consumer } from 'xfc';
import EmbeddedContentConsumer from '../../../lib/EmbeddedContentConsumer';

Consumer.init();

const BasicConsumer = () => (
  <EmbeddedContentConsumer
    src="#/raw/tests/embedded-content-consumer/providers/basic-provider"
  />
);

export default BasicConsumer;
