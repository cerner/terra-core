import React from 'react';

import Overlay from '../../../lib/Overlay';
import OverlayContainer from '../../../lib/OverlayContainer';

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

  render() {
    return (
      <OverlayContainer style={{ height: '100px', width: '100%' }} >
        <Overlay isOpen={this.state.show} isRelativeToContainer={this.state.relative} onRequestClose={this.handleOnRequestESC} id={this.state.id}>
          <h3>The onRequestClose prop gives the overlay close behaviors.</h3>
          <br />
          <p>Close by clicking inside the overlay or pressing the ESC key.</p>
        </Overlay>
        <button id="trigger_container" onClick={this.handleTriggerOverlay}>Trigger Container Overlay</button>
        <button id="trigger_fullscreen" onClick={this.handleTriggerFullScreenOverlay}>Trigger Fullscreen Overlay</button>
      </OverlayContainer>
    );
  }
}

export default OverlayExample;
