import React from 'react';
import Select from 'terra-form-select';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Signature from 'terra-signature/lib/Signature';

class SignatureExample extends React.Component {
  constructor() {
    super();

    this.state = { lineSegments: [], lineWidth: Signature.Opts.Width.FINE };

    this.handleSingleLine = this.handleSingleLine.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleLineWidth = this.handleLineWidth.bind(this);
  }

  handleSingleLine() {
    const singleLine = [{
      x1: 71, y1: 8, x2: 71, y2: 8,
    }, {
      x1: 71, y1: 8, x2: 71, y2: 10,
    }, {
      x1: 71, y1: 10, x2: 71, y2: 17,
    }, {
      x1: 71, y1: 17, x2: 71, y2: 28,
    }, {
      x1: 71, y1: 28, x2: 71, y2: 44,
    }, {
      x1: 71, y1: 44, x2: 71, y2: 56,
    }, {
      x1: 71, y1: 56, x2: 71, y2: 68,
    }, {
      x1: 71, y1: 68, x2: 71, y2: 75,
    }, {
      x1: 71, y1: 75, x2: 71, y2: 81,
    }, {
      x1: 71, y1: 81, x2: 71, y2: 84,
    }, {
      x1: 71, y1: 84, x2: 71, y2: 86,
    }, {
      x1: 71, y1: 86, x2: 71, y2: 87,
    }, {
      x1: 71, y1: 87, x2: 71, y2: 87,
    }];
    const newState = Object.assign({}, this.state, { lineSegments: singleLine });
    this.setState(newState);
  }

  handleClear() {
    const newState = Object.assign({}, this.state, { lineSegments: [] });
    this.setState(newState);
  }

  handleLineWidth(value) {
    const newState = Object.assign({}, this.state, { lineSegments: [], lineWidth: parseInt(value, 10) });
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <div style={{
 height: '100px', width: '100%', padding: '5px', border: '1px solid black',
}}
        >
          <Signature id="foo" lineWidth={this.state.lineWidth} lineSegments={this.state.lineSegments} />
        </div>
        <div>
          <button onClick={this.handleClear}>Clear </button>
          <button onClick={this.handleSingleLine}>Sign w/Line </button>
          <Select placeholder="Select a line width" value={this.state.lineWidth} onChange={this.handleLineWidth}>
            <Select.Option value="1" display="EXTRAFINE" key="extrafine" />
            <Select.Option value="2" display="FINE" key="fine" />
            <Select.Option value="4" display="MEDIUM" key="medium" />
            <Select.Option value="6" display="HEAVY" key="heavy" />
          </Select>
        </div>
      </div>
    );
  }
}

export default SignatureExample;
