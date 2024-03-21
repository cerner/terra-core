import React from 'react';
import Signature from 'terra-signature';
import classNames from 'classnames/bind';
import Tabs from 'terra-tabs';
import TextSignature from './TextSignature';
import ImageSignature from './ImageSignature';
import styles from './SignatureExample.module.scss';

const cx = classNames.bind(styles);

class SignatureExample extends React.Component {
  constructor() {
    super();

    this.state = { lineSegments: [], lineWidth: Signature.Opts.Width.FINE };
    this.handleClear = this.handleClear.bind(this);
    this.handleLineWidth = this.handleLineWidth.bind(this);
    this.tabKey = 'compact';
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
        <Tabs setFocusOnContent defaultActiveKey={`${this.tabKey}DrawTab`} id={this.tabKey}>
          <Tabs.Pane label="Draw" key={`${this.tabKey}DrawTab`} id={`${this.tabKey}DrawTab`}>
            <br />
            <>
              <div className={cx('signature-wrapper')}>
                <Signature id="draw" lineWidth={this.state.lineWidth} lineSegments={this.state.lineSegments} />
              </div>
            </>
            <br />
            <div>
              <button type="button" onClick={this.handleClear}>Clear </button>
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
          </Tabs.Pane>
          <Tabs.Pane label="Type" key={`${this.tabKey}TextTab`} id={`${this.tabKey}TextTab`}>
            <br />
            <TextSignature />
          </Tabs.Pane>
          <Tabs.Pane label="Upload" key={`${this.tabKey}UploadTab`} id={`${this.tabKey}UploadTab`}>
            <br />
            <ImageSignature />
          </Tabs.Pane>
        </Tabs>
        <p>
          <strong>Note: </strong>
          This example [terra-signature] currently supports only &aposDraw&apos Functionality. &aposSignature Text&apos and &aposSignature Upload Image&apos functionalities will be part of future enhancement.
        </p>
      </div>
    );
  }
}

export default SignatureExample;
