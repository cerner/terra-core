import React from 'react';
import Overlay from 'terra-overlay/lib/Overlay';
import OverlayContainer from 'terra-overlay/lib/OverlayContainer';
import Button from 'terra-button';

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

  render() {
    return (
      <OverlayContainer style={{ height: '100px', width: '100%' }} >
        <Overlay isOpen={this.state.show} isRelativeToContainer={this.state.relative} onRequestClose={this.handleOnRequestESC}>
          <p>Close by clicking the overlay or pressing the ESC key.</p>
        </Overlay>
        <Button onClick={this.handleTriggerOverlay}>Trigger Container Overlay</Button>
        <Button onClick={this.handleTriggerFullScreenOverlay}>Trigger FullScreen Overlay</Button>
      </OverlayContainer>
    );
  }
}

export default OverlayExample;
