import React from 'react';

import Overlay from '../../../lib/Overlay';
import OverlayContainer from '../../../lib/OverlayContainer';

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

  render() {
    return (
      <div>
        <OverlayContainer style={{ height: '100px', width: '100%' }} >
          <Overlay isOpen={this.state.show} isRelativeToContainer={this.state.relative} id={this.state.id} >
            <h3>Overlay will timeout in 5 seconds.</h3>
          </Overlay>
          <button id="trigger_fullscreen" onClick={this.handleTriggerFullScreenOverlay}>Trigger Fullscreen Overlay</button>
          <button id="trigger_container" onClick={this.handleTriggerOverlay}>Trigger Container Overlay</button>
        </OverlayContainer>
        <br />
        <p> Outside of overlay container to prove functionality. Click the random button below after clicking the Trigger Container Overlay button to confirm an Overlay relative to container does not block outside interactions. </p>
        <button id="random_button" onClick={this.handleRandomClick}>A Random Button To Change Toggle State </button>
        <p> Random Button toggle State is <span id="random_state">{this.state.toggle}</span>. </p>
      </div>
    );
  }
}

export default OverlayExample;
