import React from 'react';
import { Consumer } from 'xfc';
import EmbeddedContentConsumer from '../../../lib/EmbeddedContentConsumer';

Consumer.init();

const onFullScreen = () => {
  document.getElementById('FullScreenWrapper').style.border = 'thick dashed #0000FF';
};

const FullScreenConsumer = () => (
  <div id="FullScreenWrapper">
    <EmbeddedContentConsumer
      src="#/tests/embedded-content-consumer-tests/full-screen-provider"
      onFullScreen={onFullScreen}
    />
  </div>
);

export default FullScreenConsumer;
