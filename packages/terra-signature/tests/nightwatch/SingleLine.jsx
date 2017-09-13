import React from 'react';

import Signature from '../../lib/Signature';

class SignatureLine extends React.Component {

  render() {
    return (
      <div style={{ height: '100px', width: '100px', border: '1px solid black' }}>
        <Signature id="singleline" ref={(instance) => { this.signature = instance; }} />
      </div>
    );
  }
}

export default SignatureLine;
