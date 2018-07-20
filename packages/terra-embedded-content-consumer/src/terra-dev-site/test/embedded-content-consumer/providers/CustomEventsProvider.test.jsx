import React from 'react';
import { Provider } from 'xfc';
import './Provider.scss';
import './ProviderIframe.module.scss';

class CustomEventsProvider extends React.Component {
  componentDidMount() {
    document.body.classList.toggle('embedded-content-body');
    if (!window.location.origin) {
      const port = (window.location.port ? `:${window.location.port}` : '');
      window.location.origin = `${window.location.protocol}//${window.location.hostname}${port}`;
    }
    Provider.init({ acls: [window.location.origin] });
    Provider.trigger('EventA');
    setTimeout(() => { Provider.trigger('EventB'); }, 1000);
  }

  componentWillUnmount() {
    document.body.classList.toggle('embedded-content-body');
  }

  render() {
    return (
      <div>
        <title>Custom Events Provider</title>
        <meta charSet="utf-8" />
        <div>
          <h1>Custom Events</h1>
          <p>Custom events can be registered with the consumer and intiated by the provider.</p>
          <p>After a one second delay the provider sends the message and consumer handles the message by adding a border.</p>
          <p>After another second delay the provider sends the message and consumer handles the message by updating the border.</p>
        </div>
      </div>
    );
  }
}

export default CustomEventsProvider;
