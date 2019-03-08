import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Overlay from 'terra-overlay/lib/Overlay';
import OverlayContainer from 'terra-overlay/lib/OverlayContainer';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
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
      <OverlayContainer style={{ height: '100px', width: '100%' }}>
        <Overlay isOpen={this.state.show} isRelativeToContainer={this.state.relative} onRequestClose={this.handleOnRequestESC} zIndex="6000">
          <p>Close by clicking the overlay or pressing the ESC key.</p>
        </Overlay>
        <div>
          <Button text="Trigger Container Overlay" onClick={this.handleTriggerOverlay} />
          <Button text="Trigger FullScreen Overlay" onClick={this.handleTriggerFullScreenOverlay} />
        </div>
      </OverlayContainer>
    );
  }
}

export default OverlayExample;
