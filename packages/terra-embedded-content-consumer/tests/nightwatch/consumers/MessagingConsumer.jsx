import React from 'react';
import { Consumer } from 'xfc';
import EmbeddedContentConsumer from '../../../lib/EmbeddedContentConsumer';

Consumer.init();

class MessagingConsumer extends React.Component {
  render() {
    return (
      <EmbeddedContentConsumer
        src="#/tests/embedded-content-consumer-tests/messaging-provider"
        onMount={(element) => { this.embeddedContentConsumer = element; }}
        onAuthorize={() => { this.embeddedContentConsumer.trigger('SHOW_STATUSES'); }}
        options={{ secret: 'OAuth Secret' }}
      />
    );
  }
}

export default MessagingConsumer;
