import React from 'react';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';

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
      src="#/tests/embedded-content-consumer-tests/custom-events-provider"
      eventHandlers={eventHandlers}
      fill
    />
  </div>
);

export default CustomEventsConsumer;
