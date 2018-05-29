import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import EmbeddedContentConsumer from 'terra-embedded-content-consumer/lib/EmbeddedContentConsumer';

const eventHandlers = [
  {
    key: 'EventA',
    handler: () => {
      document.getElementById('CustomEvents').style.border = 'thick dashed #0000FF';
    },
  },
  {
    key: 'EventB',
    handler: () => {
      document.getElementById('CustomEvents').style.border = 'thick dashed #00FF00';
    },
  },
];

const CustomEventsConsumer = () => (
  <div id="CustomEvents">
    <EmbeddedContentConsumer
      src="#/raw/tests/terra-embedded-content-consumer/embedded-content-consumer/providers/custom-events-provider"
      eventHandlers={eventHandlers}
    />
  </div>
);

export default CustomEventsConsumer;
