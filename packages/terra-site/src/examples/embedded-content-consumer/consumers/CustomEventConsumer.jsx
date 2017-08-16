import React from 'react';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';

const eventHandlers = [{
  key: 'EventA',
  handler: () => {
    document.getElementById('CustomEvent').style.border = 'thick dashed #0000FF';
  },
}];

const CustomEventConsumer = () => (
  <div id="CustomEvent">
    <EmbeddedContentConsumer
      src="#/tests/embedded-content-consumer-tests/custom-event-provider"
      eventHandlers={eventHandlers}
      fill
    />
  </div>
);

export default CustomEventConsumer;
