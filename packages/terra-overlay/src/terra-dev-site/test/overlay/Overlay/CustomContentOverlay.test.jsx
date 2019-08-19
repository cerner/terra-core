import React from 'react';
import classNames from 'classnames/bind';
import Overlay from '../../../../Overlay';
import OverlayContainer from '../../../../OverlayContainer';
import styles from './OverlayTestCommon.module.scss';

const cx = classNames.bind(styles);

class OverlayExample extends React.Component {
  constructor() {
    super();
    this.state = { show: false, toggle: 'true' };
    this.handleTriggerOverlay = this.handleTriggerOverlay.bind(this);
    this.handleTriggerFullScreenOverlay = this.handleTriggerFullScreenOverlay.bind(this);
    this.handleRandomClick = this.handleRandomClick.bind(this);
  }

  handleTriggerOverlay() {
    this.setState({ show: true, relative: true, id: 'terra-Overlay--container' });

    setTimeout(() => {
      this.setState({ show: false });
    }, 5000);
  }

  handleTriggerFullScreenOverlay() {
    this.setState({ show: true, relative: false, id: 'terra-Overlay--fullscreen' });

    setTimeout(() => {
      this.setState({ show: false });
    }, 5000);
  }

  handleRandomClick() {
    if (this.state.toggle === 'false') {
      this.setState({ toggle: 'true' });
    } else {
      this.setState({ toggle: 'false' });
    }
  }

  addOverlay() {
    return (
      <Overlay isOpen={this.state.show} isRelativeToContainer={this.state.relative} id={this.state.id}>
        <h3>Overlay will timeout in 5 seconds.</h3>
      </Overlay>
    );
  }

  render() {
    return (
      <div id="custom-content-example">
        <OverlayContainer className={cx('overlay-container2')} overlay={this.addOverlay()}>
          <button type="button" id="trigger_fullscreen" onClick={this.handleTriggerFullScreenOverlay}>Trigger Fullscreen Overlay</button>
          <button type="button" id="trigger_container" onClick={this.handleTriggerOverlay}>Trigger Container Overlay</button>
        </OverlayContainer>
        <br />
        <p> Outside of overlay container to prove functionality. Click the random button below after clicking the Trigger Container Overlay button to confirm an Overlay relative to container does not block outside interactions. </p>
        <button type="button" id="random_button" onClick={this.handleRandomClick}>A Random Button To Change Toggle State </button>
        <p>
          Random Button toggle State is
          {' '}
          <span id="random_state">{this.state.toggle}</span>
        </p>
      </div>
    );
  }
}

export default OverlayExample;
