import React from 'react';
import { Provider } from 'xfc';
import styles from './Provider.scss';

class OnReadyProvider extends React.Component {
  componentDidMount() {
    document.body.classList.toggle('embedded-content-body');
    Provider.init({
      acls: ['http://localhost:8080'],
      onReady: () => {
        document.getElementById('ready').innerHTML = 'onReady function being executed after the consumer has been authorized.';
      },
    });
  }

  render() {
    return (
      <div className={[styles['embedded-content']]}>
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
