import React from 'react';
import classNames from 'classnames/bind';

import Overlay from '../../../../Overlay';
import OverlayContainer from '../../../../OverlayContainer';
import styles from './OverlayTestCommon.module.scss';

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
    this.setState({ show: true, relative: true, id: 'terra-Overlay--container' });
  }

  handleTriggerFullScreenOverlay() {
    this.setState({ show: true, relative: false, id: 'terra-Overlay--fullscreen' });
  }

  handleOnRequestESC() {
    this.setState({ show: false });
  }

  addOverlay() {
    return (
      <Overlay isOpen={this.state.show} isRelativeToContainer={this.state.relative} onRequestClose={this.handleOnRequestESC} id={this.state.id} zIndex="6000">
        <h3>The onRequestClose prop gives the overlay close behaviors.</h3>
        <br />
        <p>Close by clicking inside the overlay or pressing the ESC key.</p>
      </Overlay>
    );
  }


  render() {
    return (
      <OverlayContainer className={cx('overlay-container2')} overlay={this.addOverlay()}>
        <button type="button" id="trigger_container" onClick={this.handleTriggerOverlay}>Trigger Container Overlay</button>
        <button type="button" id="trigger_fullscreen" onClick={this.handleTriggerFullScreenOverlay}>Trigger Fullscreen Overlay</button>
      </OverlayContainer>
    );
  }
}

export default OverlayExample;
