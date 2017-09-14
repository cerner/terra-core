import React from 'react';

import Signature from '../../lib/Signature';

class SignatureExample extends React.Component {
  constructor() {
    super();

    this.state = { lineSegments: [], lineWidth: Signature.Opts.Width.FINE };
  }

  render() {
    return (
      <div style={{ height: '100px', width: '100px', border: '1px solid black' }}>
        <Signature id="foo" lineWidth={this.state.lineWidth} lineSegments={this.state.lineSegments} ref={(instance) => { this.signature = instance; }} />
      </div>
    );
  }
}

export default SignatureExample;
