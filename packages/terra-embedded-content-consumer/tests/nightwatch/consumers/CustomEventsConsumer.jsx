import React from 'react';
import { Consumer } from 'xfc';
import EmbeddedContentConsumer from '../../../lib/EmbeddedContentConsumer';

Consumer.init();

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
    />
  </div>
);

export default CustomEventsConsumer;
