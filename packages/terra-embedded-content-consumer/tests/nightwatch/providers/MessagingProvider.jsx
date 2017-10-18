/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Provider } from 'xfc';
import './Provider.scss';

class MessagingProvider extends React.Component {
  constructor(props) {
    super(props);
    Provider.init({
      acls: ['*'],
      secret: 'OAuth Secret',
      onReady: () => {
        Provider.on('SHOW_STATUSES', () => {
          const lifeCycleStatuses = ['Mounted', 'Launched', 'Authorized'];
          lifeCycleStatuses.forEach((status) => {
            const textItem = document.createTextNode(status);
            const listItem = document.createElement('li');
            listItem.setAttribute('id', status);
            listItem.appendChild(textItem);
            document.getElementById('Messaging-LifeCycleStatuses').appendChild(listItem);
          });
        });
      },
    });
  }

  componentDidMount() {
    document.body.classList.toggle('embedded-content-body');
  }

  render() {
    return (
      <div>
        <title>Embedded Application Lifecycle</title>
        <meta charSet="utf-8" />
        <div>
          <h1>Embedded Application Lifecycle</h1>
          <p>The embedded container statues are showing after recieving a message from the consumer. The embedded container can have the following statuses:</p>
          <ul id="Messaging-LifeCycleStatuses" />
        </div>
      </div>
    );
  }
}

export default MessagingProvider;
