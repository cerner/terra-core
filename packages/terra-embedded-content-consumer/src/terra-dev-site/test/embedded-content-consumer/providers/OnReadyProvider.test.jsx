import React from 'react';
import { Provider } from 'xfc';
import './Provider.scss';
import './ProviderIframe.module.scss';

class OnReadyProvider extends React.Component {
  componentDidMount() {
    document.body.classList.toggle('embedded-content-body');
    if (!window.location.origin) {
      const port = (window.location.port ? `:${window.location.port}` : '');
      window.location.origin = `${window.location.protocol}//${window.location.hostname}${port}`;
    }
    Provider.init({
      acls: [window.location.origin],
      onReady: () => {
        document.getElementById('ready').innerHTML = 'onReady function being executed after the consumer has been authorized.';
      },
    });
  }

  componentWillUnmount() {
    document.body.classList.toggle('embedded-content-body');
  }

  render() {
    return (
      <div>
        <title>On Ready Provider</title>
        <meta charSet="utf-8" />
        <div>
          <h1>On Ready Events</h1>
          <p>An On Ready function triggers after initialization is complete.</p>
          <p id="ready" />
        </div>
      </div>
    );
  }
}

export default OnReadyProvider;
