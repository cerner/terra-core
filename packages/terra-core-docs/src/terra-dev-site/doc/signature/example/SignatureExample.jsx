import React from 'react';
import Signature from 'terra-signature';
import classNames from 'classnames/bind';
import styles from './SignatureExample.module.scss';

const cx = classNames.bind(styles);

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
    const newState = { ...this.state, lineSegments: singleLine };
    this.setState(newState);
  }

  handleClear() {
    const newState = { ...this.state, lineSegments: [] };
    this.setState(newState);
  }

  handleLineWidth(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <div className={cx('signature-wrapper')}>
          <Signature id="foo" lineWidth={this.state.lineWidth} lineSegments={this.state.lineSegments} />
        </div>
        <div>
          <button type="button" onClick={this.handleClear}>Clear </button>
          <button type="button" onClick={this.handleSingleLine}>Sign w/Line </button>
          <div>
            <p><label htmlFor="lineWidth">Select a line width:</label></p>
            <select id="lineWidth" name="lineWidth" value={this.state.lineWidth} onChange={this.handleLineWidth}>
              <option value="1">EXTRAFINE</option>
              <option value="2">FINE</option>
              <option value="4">MEDIUM</option>
              <option value="6">HEAVY</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default SignatureExample;
