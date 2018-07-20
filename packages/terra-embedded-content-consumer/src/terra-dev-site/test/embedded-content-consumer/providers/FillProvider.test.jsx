/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Provider } from 'xfc';
import './Provider.scss';
import './ProviderIframe.module.scss';

class FillProvider extends React.Component {
  componentDidMount() {
    document.body.classList.toggle('embedded-content-body-fill');
    if (!window.location.origin) {
      const port = (window.location.port ? `:${window.location.port}` : '');
      window.location.origin = `${window.location.protocol}//${window.location.hostname}${port}`;
    }
    Provider.init({ acls: [window.location.origin] });
  }

  componentWillUnmount() {
    document.body.classList.toggle('embedded-content-body');
  }

  render() {
    return (
      <div>
        <title>Fill Content</title>
        <meta charSet="utf-8" />
        <div>
          <h1>Fill Content</h1>
          <p>This page simulates the situation where the embedded content consumer expands into the parent.</p>
        </div>
      </div>
    );
  }
}

export default FillProvider;
