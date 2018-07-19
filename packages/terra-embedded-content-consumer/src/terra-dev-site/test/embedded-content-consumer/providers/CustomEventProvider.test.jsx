import React from 'react';
import { Provider } from 'xfc';
import './Provider.scss';
import './ProviderIframe.module.scss';

class CustomEventProvider extends React.Component {
  componentDidMount() {
    document.body.classList.toggle('embedded-content-body');
    if (!window.location.origin) {
      const port = (window.location.port ? `:${window.location.port}` : '');
      window.location.origin = `${window.location.protocol}//${window.location.hostname}${port}`;
    }
    Provider.init({ acls: [window.location.origin] });
    Provider.trigger('EventA');
  }

  componentWillUnmount() {
    document.body.classList.toggle('embedded-content-body');
  }

  render() {
    return (
      <div>
        <title>Custom Event Provider</title>
        <meta charSet="utf-8" />
        <div>
          <h1>Custom Event</h1>
          <p>A custom event can be registered with the consumer and intiated by the provider.</p>
          <p>After a one second delay the provider sends the message and consumer handles the message by adding a border.</p>
        </div>
      </div>
    );
  }
}

export default CustomEventProvider;
