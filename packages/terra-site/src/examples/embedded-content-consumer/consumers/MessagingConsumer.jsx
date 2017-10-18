import React from 'react';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';

class MessagingConsumer extends React.Component {
  render() {
    return (
      <EmbeddedContentConsumer
        src="#/tests/embedded-content-consumer-tests/messaging-provider"
        onMount={(element) => { this.embeddedContentConsumer = element; }}
        onAuthorize={() => { this.embeddedContentConsumer.trigger('SHOW_STATUSES'); }}
        options={{ secret: 'OAuth Secret' }}
        fill
      />
    );
  }
}

export default MessagingConsumer;
