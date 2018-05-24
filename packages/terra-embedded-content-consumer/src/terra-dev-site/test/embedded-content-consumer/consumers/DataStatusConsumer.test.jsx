import React from 'react';
import { Consumer } from 'xfc';
import EmbeddedContentConsumer from '../../../../EmbeddedContentConsumer';

Consumer.init();

const createListItem = (itemName) => {
  const listItem = document.createElement('li');
  listItem.setAttribute('id', itemName);
  listItem.appendChild(document.createTextNode(itemName));

  return listItem;
};

const appendLifeCycleStatus = (itemName) => {
  const frame = document.getElementsByTagName('iframe')[0];
  const statusList = frame.contentWindow.document.getElementById('DataStatus-LifeCycleStatuses');
  statusList.appendChild(createListItem(itemName));
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
  lifeCycleStatuses.forEach((status) => { appendLifeCycleStatus(status); });
};

const DataStatusConsumer = () => (
  <EmbeddedContentConsumer
    src="#/raw/tests/terra-embedded-content-consumer/embedded-content-consumer/providers/data-status-provider"
    onMount={onMount}
    onLaunch={onLaunch}
    onAuthorize={onAuthorize}
    options={options}
  />
);

export default DataStatusConsumer;
