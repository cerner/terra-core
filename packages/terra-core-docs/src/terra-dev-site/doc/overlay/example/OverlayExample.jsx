import React from 'react';
import Overlay from 'terra-overlay';
import OverlayContainer from 'terra-overlay/lib/OverlayContainer';
import Button from 'terra-button';
import Text from 'terra-text';
import classNames from 'classnames/bind';
import styles from './OverlayDocCommon.module.scss';

const cx = classNames.bind(styles);

class OverlayExample extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false,
      showCustomContent: false,
    };
    this.handleTriggerOverlay = this.handleTriggerOverlay.bind(this);
    this.handleTriggerFullScreenOverlay = this.handleTriggerFullScreenOverlay.bind(this);
    this.handleOnRequestESC = this.handleOnRequestESC.bind(this);
  }

  handleTriggerOverlay(showCustomContent) {
    this.setState({ show: true, relative: true, showCustomContent });
  }

  handleTriggerFullScreenOverlay(showCustomContent) {
    this.setState({ show: true, relative: false, showCustomContent });
  }

  handleOnRequestESC() {
    this.setState({ show: false });
  }

  getCustomContent() {
    return (
      <div className={cx('overlay-context-wrapper')}>
        <Text fontSize={14}>This overlay has custom content in it.</Text>
        <Button text="Close" onClick={this.handleOnRequestESC} className={cx('button')} />
      </div>
    );
  }

  addOverlay() {
    return (
      <Overlay isOpen={this.state.show} isRelativeToContainer={this.state.relative} onRequestClose={!this.state.showCustomContent ? this.handleOnRequestESC : () => {}} zIndex="6000">
        {this.state.showCustomContent
          ? this.getCustomContent()
          : <p>Close by clicking the overlay or pressing the ESC key.</p>}
      </Overlay>
    );
  }

  render() {
    return (
      <OverlayContainer className={cx('overlay-container')} overlay={this.addOverlay()}>
        <Button text="Trigger Container Overlay" onClick={() => this.handleTriggerOverlay(false)} />
        <Button text="Trigger FullScreen Overlay" onClick={() => this.handleTriggerFullScreenOverlay(false)} />
        <Button text="Trigger Container Overlay with Content" onClick={() => this.handleTriggerOverlay(true)} />
        <Button text="Trigger FullScreen Overlay with Content" onClick={() => this.handleTriggerFullScreenOverlay(true)} />
      </OverlayContainer>
    );
  }
}

export default OverlayExample;
