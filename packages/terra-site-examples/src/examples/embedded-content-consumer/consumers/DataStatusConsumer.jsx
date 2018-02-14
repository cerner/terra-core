import React from 'react';
import { Consumer } from 'xfc';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';

Consumer.init();

const createListItem = (itemName) => {
  const listItem = document.createElement('li');
  listItem.setAttribute('id', itemName);
  listItem.appendChild(document.createTextNode(itemName));

  return listItem;
};

const appendLifeCycleStatuses = (statuses) => {
  const frames = document.getElementsByTagName('iframe');
  for (let frameIndex = 0; frameIndex < frames.length; frameIndex += 1) {
    const frame = frames[frameIndex];
    const statusList = frame.contentWindow.document.getElementById('DataStatus-LifeCycleStatuses');
    if (statusList) {
      statuses.forEach((status) => { statusList.appendChild(createListItem(status)); });
    }
  }
};

const options = { secret: 'OAuth Secret' };
const lifeCycleStatuses = [];
const onMount = () => {
  lifeCycleStatuses.push('Mounted');
};
const onLaunch = () => {
  lifeCycleStatuses.push('Launched');
};
const onAuthorize = () => {
  lifeCycleStatuses.push('Authorized');
  appendLifeCycleStatuses(lifeCycleStatuses);
};

const DataStatusConsumer = () => (
  <EmbeddedContentConsumer
    src="#/raw/tests/embedded-content-consumer/providers/data-status-provider"
    onMount={onMount}
    onLaunch={onLaunch}
    onAuthorize={onAuthorize}
    options={options}
  />
);

export default DataStatusConsumer;
