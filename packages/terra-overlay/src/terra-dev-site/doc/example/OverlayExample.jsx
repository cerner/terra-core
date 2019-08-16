import React from 'react';
import Overlay from 'terra-overlay';
import OverlayContainer from 'terra-overlay/lib/OverlayContainer';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import styles from './OverlayDocCommon.module.scss';

const cx = classNames.bind(styles);

class OverlayExample extends React.Component {
  constructor() {
    super();

    this.state = { show: false };
    this.handleTriggerOverlay = this.handleTriggerOverlay.bind(this);
    this.handleTriggerFullScreenOverlay = this.handleTriggerFullScreenOverlay.bind(this);
    this.handleOnRequestESC = this.handleOnRequestESC.bind(this);
  }

  handleTriggerOverlay() {
    this.setState({ show: true, relative: true });
  }

  handleTriggerFullScreenOverlay() {
    this.setState({ show: true, relative: false });
  }

  handleOnRequestESC() {
    this.setState({ show: false });
  }

  addOverlay() {
    return (
      <Overlay isOpen={this.state.show} isRelativeToContainer={this.state.relative} onRequestClose={this.handleOnRequestESC} zIndex="6000">
        <p>Close by clicking the overlay or pressing the ESC key.</p>
      </Overlay>
    );
  }

  render() {
    return (
      <OverlayContainer className={cx('overlay-container')} overlay={this.addOverlay()}>
        <Button text="Trigger Container Overlay" onClick={this.handleTriggerOverlay} />
        <Button text="Trigger FullScreen Overlay" onClick={this.handleTriggerFullScreenOverlay} />
      </OverlayContainer>
    );
  }
}

export default OverlayExample;
