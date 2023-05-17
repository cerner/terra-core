import React from 'react';
import LoadingOverlay from 'terra-overlay/lib/LoadingOverlay';
import OverlayContainer from 'terra-overlay/lib/OverlayContainer';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import styles from './OverlayDocCommon.module.scss';

const cx = classNames.bind(styles);

class OverlayExample extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false,
      showCustomMessage: false,
    };
    this.handleTriggerOverlay = this.handleTriggerOverlay.bind(this);
    this.handleTriggerFullScreenOverlay = this.handleTriggerFullScreenOverlay.bind(this);
  }

  handleTriggerOverlay(showCustomMessage) {
    this.setState({ show: true, isRelativeToContainer: true, showCustomMessage });

    setTimeout(() => {
      this.setState({ show: false });
    }, 5000);
  }

  handleTriggerFullScreenOverlay(showCustomMessage) {
    this.setState({ show: true, isRelativeToContainer: false, showCustomMessage });

    setTimeout(() => {
      this.setState({ show: false });
    }, 5000);
  }

  addLoadingOverlay() {
    return (
      <LoadingOverlay isOpen={this.state.show} message={this.state.showCustomMessage ? 'The custom loading message' : null} isAnimated isRelativeToContainer={this.state.isRelativeToContainer} zIndex="6000" />
    );
  }

  render() {
    return (
      <OverlayContainer className={cx('overlay-container')} overlay={this.addLoadingOverlay()}>
        <Button text="Trigger Container Overlay" onClick={() => this.handleTriggerOverlay(false)} />
        <Button text="Trigger FullScreen Overlay" onClick={() => this.handleTriggerFullScreenOverlay(false)} />
        <Button text="Trigger Container Overlay with Custom Message" onClick={() => this.handleTriggerOverlay(true)} />
        <Button text="Trigger FullScreen Overlay with Custom Message" onClick={() => this.handleTriggerFullScreenOverlay(true)} />
      </OverlayContainer>
    );
  }
}

export default OverlayExample;
