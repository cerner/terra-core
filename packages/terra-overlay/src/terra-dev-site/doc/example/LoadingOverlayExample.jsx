import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import LoadingOverlay from 'terra-overlay/lib/LoadingOverlay';
import OverlayContainer from 'terra-overlay/lib/OverlayContainer';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
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
  }

  handleTriggerOverlay() {
    this.setState({ show: true, isRelativeToContainer: true });

    setTimeout(() => {
      this.setState({ show: false });
    }, 5000);
  }

  handleTriggerFullScreenOverlay() {
    this.setState({ show: true, isRelativeToContainer: false });

    setTimeout(() => {
      this.setState({ show: false });
    }, 5000);
  }

  addLoadingOverlay() {
    return (
      <LoadingOverlay isOpen={this.state.show} isAnimated isRelativeToContainer={this.state.isRelativeToContainer} zIndex="6000" />
    );
  }

  render() {
    return (
      <OverlayContainer className={cx('overlay-container')} overlay={this.addLoadingOverlay()}>
        <Button text="Trigger Container Overlay" onClick={this.handleTriggerOverlay} />
        <Button text="Trigger FullScreen Overlay" onClick={this.handleTriggerFullScreenOverlay} />
      </OverlayContainer>
    );
  }
}

export default OverlayExample;
