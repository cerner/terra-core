import React from 'react';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';

const BasicConsumer = () => (
  <EmbeddedContentConsumer
    src="#/tests/embedded-content-consumer-tests/basic-provider"
  />
);

export default BasicConsumer;
