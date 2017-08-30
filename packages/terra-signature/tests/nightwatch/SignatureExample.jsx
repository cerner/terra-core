import React from 'react';

import Signature from '../../lib/Signature';

class SignatureExample extends React.Component {
  constructor() {
    super();

    this.state = { show: false };
  }

  render() {
    return (
      <div style={{ height: '100px', width: '100%', border: '1px solid black' }}>
        <Signature ref={(instance) => { this.signature = instance; }} />
      </div>
    );
  }
}

export default SignatureExample;
