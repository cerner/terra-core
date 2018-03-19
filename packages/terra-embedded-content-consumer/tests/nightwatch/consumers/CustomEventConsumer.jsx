import React from 'react';
import { Consumer } from 'xfc';
import EmbeddedContentConsumer from '../../../lib/EmbeddedContentConsumer';

Consumer.init();

const eventHandlers = [{
  key: 'EventA',
  handler: () => {
    document.getElementById('CustomEvent').style.border = 'thick dashed #0000FF';
  },
}];

const CustomEventConsumer = () => (
  <div id="CustomEvent">
    <EmbeddedContentConsumer
      src="#/raw/tests/embedded-content-consumer/providers/custom-event-provider"
      eventHandlers={eventHandlers}
    />
  </div>
);

export default CustomEventConsumer;
