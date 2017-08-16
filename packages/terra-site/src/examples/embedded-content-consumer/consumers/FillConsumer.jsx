import React from 'react';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';

const FillConsumer = () => (
  <EmbeddedContentConsumer
    src="#/tests/embedded-content-consumer-tests/basic-provider"
    fill
  />
);

export default FillConsumer;
