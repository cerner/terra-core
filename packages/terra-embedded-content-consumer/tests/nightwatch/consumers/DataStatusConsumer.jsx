import React from 'react';
import { Consumer } from 'xfc';
import EmbeddedContentConsumer from '../../../lib/EmbeddedContentConsumer';

Consumer.init();

const appendLifeCycleStatus = (itemName) => {
  const textItem = document.createTextNode(itemName);
  const listItem = document.createElement('li');
  listItem.setAttribute('id', itemName);
  listItem.appendChild(textItem);
  const frame = document.getElementsByTagName('iframe')[0];
  frame.contentWindow.document.getElementById('LifeCycleStatuses').appendChild(listItem);
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
  />
);

export default DataStatusConsumer;
