import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import EmbeddedContentConsumer from 'terra-embedded-content-consumer/lib/EmbeddedContentConsumer';

const FillConsumer = () => (
  <EmbeddedContentConsumer
    src="#/raw/tests/terra-embedded-content-consumer/embedded-content-consumer/providers/fill-provider"
  />
);

export default FillConsumer;
