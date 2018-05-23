import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import EmbeddedContentConsumer from 'terra-embedded-content-consumer/lib/EmbeddedContentConsumer';

const BasicConsumer = () => (
  <EmbeddedContentConsumer
    src="#/raw/tests/embedded-content-consumer/providers/basic-provider"
  />
);

export default BasicConsumer;
