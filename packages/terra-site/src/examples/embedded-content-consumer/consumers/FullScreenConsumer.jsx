import React from 'react';
import { Consumer } from 'xfc';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';

Consumer.init();

const onFullScreen = (url) => { window.open(url); };

const FullScreenConsumer = () => (
  <div id="FullScreenWrapper">
    <EmbeddedContentConsumer
      src="#/tests/embedded-content-consumer-tests/full-screen-provider"
      onFullScreen={onFullScreen}
      fill
    />
  </div>
);

export default FullScreenConsumer;
