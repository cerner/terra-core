/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

class BasicProvider extends React.Component {
  componentDidMount() {
    document.body.classList.toggle('embedded-content-body');
  }

  componentWillUnmount() {
    document.body.classList.toggle('embedded-content-body');
  }

  render() {
    return (
      <div>
        <title>Basic Provider</title>
        <meta charSet="utf-8" />
        <div>
          <h1>Basic content</h1>
          <p>This page simulates the situation where the embedded content consumer displays the configured provider.</p>
        </div>
      </div>
    );
  }
}

export default BasicProvider;
