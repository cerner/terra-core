import React from 'react';

import Signature from '../../lib/Signature';

class SignatureExample extends React.Component {
  constructor() {
    super();

    this.state = { lineSegments: [], lineWidth: Signature.Opts.Width.FINE };

    this.handleLineWidth = this.handleLineWidth.bind(this);
  }

  handleLineWidth(e) {
    const newState = Object.assign({}, this.state, { lineSegments: [], lineWidth: parseInt(e.target.value, 10) });
    this.setState(newState);
  }

  render() {
    return (
      <div style={{ height: '100px', width: '100px', border: '1px solid black' }}>
        <Signature id="drawline" ref={(instance) => { this.signature = instance; }} />
        <select
          options={[{ value: '1', display: 'EXTRA_FINE' },
                  { value: '2', display: 'FINE' },
                  { value: '4', display: 'MEDIUM' },
                  { value: '6', display: 'HEAVY' }]}
          name="linewidth"
          defaultValue="2"
          required
          onChange={this.handleLineWidth}
        />
      </div>
    );
  }
}

export default SignatureExample;
