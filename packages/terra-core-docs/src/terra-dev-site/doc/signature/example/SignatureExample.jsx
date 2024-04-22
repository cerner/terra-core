import React from 'react';
import Signature from 'terra-signature';
import classNames from 'classnames/bind';
import Tabs from 'terra-tabs';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import Button from 'terra-button';
import { SingleSelect } from 'terra-form-select';
import TextSignature from './TextSignature';
import ImageSignature from './ImageSignature';
import styles from './SignatureExample.module.scss';

const cx = classNames.bind(styles);

class SignatureExample extends React.Component {
  constructor() {
    super();

    this.state = { lineSegments: [], lineWidth: Signature.Opts.Width.FINE, message: '' };
    this.handleClear = this.handleClear.bind(this);
    this.handleLineWidth = this.handleLineWidth.bind(this);
    this.handleLiveRegion = this.handleLiveRegion.bind(this);
    this.tabKey = 'compact';
  }

  handleClear() {
    const newState = { ...this.state, lineSegments: [] };
    this.setState(newState);
    this.handleLiveRegion();
  }

  handleLineWidth(value) {
    this.setState({ lineWidth: value });
  }

  handleLiveRegion(value) {
    this.setState({ message: value ? 'Added Signature' : 'Cleared Signature' });
    setTimeout(() => {
      this.setState({ message: '' });
    }, 3000);
  }

  render() {
    return (
      <div>
        <Tabs defaultActiveKey={`${this.tabKey}DrawTab`} id={this.tabKey}>
          <Tabs.Pane label="Draw" key={`${this.tabKey}DrawTab`} id={`${this.tabKey}DrawTab`}>
            <br />
            <>
              <div className={cx('signature-wrapper')}>
                <Signature id="draw" lineWidth={this.state.lineWidth} lineSegments={this.state.lineSegments} />
              </div>
            </>
            <br />
            <div>
              <Button className={cx('button')} text="Clear" onClick={this.handleClear} />
              <div>
                <p><label htmlFor="lineWidth">Select a line width</label></p>
                <SingleSelect className={cx('form-select')} id="lineWidth" name="lineWidth" value={this.state.lineWidth} placeholder="Select lineWidth" onSelect={this.handleLineWidth}>
                  <SingleSelect.Option value="1" display="EXTRAFINE" />
                  <SingleSelect.Option value="2" display="FINE" />
                  <SingleSelect.Option value="4" display="MEDIUM" />
                  <SingleSelect.Option value="6" display="HEAVY" />
                </SingleSelect>
              </div>
            </div>
          </Tabs.Pane>
          <Tabs.Pane label="Type" key={`${this.tabKey}TextTab`} id={`${this.tabKey}TextTab`}>
            <br />
            <TextSignature onClearSignature={this.handleLiveRegion} onAddSignature={this.handleLiveRegion} />
          </Tabs.Pane>
          <Tabs.Pane label="Upload" key={`${this.tabKey}UploadTab`} id={`${this.tabKey}UploadTab`}>
            <br />
            <ImageSignature onClearSignature={this.handleLiveRegion} />
          </Tabs.Pane>
        </Tabs>
        <VisuallyHiddenText aria-live="polite" text={this.state.message} />
      </div>
    );
  }
}

export default SignatureExample;
