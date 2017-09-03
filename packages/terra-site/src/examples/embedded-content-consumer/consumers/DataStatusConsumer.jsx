import React from 'react';
import { Consumer } from 'xfc';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';

Consumer.init();

const appendLifeCycleStatus = (itemName) => {
  const listItem = document.createElement('li');
  const textItem = document.createTextNode(itemName);
  listItem.appendChild(textItem);

  const frames = document.getElementsByTagName('iframe');
  for (let frameIndex = 0; frameIndex < frames.length; frameIndex += 1) {
    const frame = frames[frameIndex];
    const statusList = frame.contentWindow.document.getElementById('LifeCycleStatuses');
    if (statusList) {
      statusList.appendChild(listItem);
    }
  }
};

const options = { secret: 'OAuth Secret' };
const onLaunch = () => { appendLifeCycleStatus('Launched'); };
const onAuthorize = () => { appendLifeCycleStatus('Authorized'); };

const DataStatusConsumer = () => (
  <EmbeddedContentConsumer
    src="#/tests/embedded-content-consumer-tests/data-status-provider"
    onLaunch={onLaunch}
    onAuthorize={onAuthorize}
    options={options}
    fill
  />
);

export default DataStatusConsumer;
