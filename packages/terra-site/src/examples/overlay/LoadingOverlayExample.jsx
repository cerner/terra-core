import React from 'react';
import LoadingOverlay from 'terra-overlay/lib/LoadingOverlay';
import OverlayContainer from 'terra-overlay/lib/OverlayContainer';
import Button from 'terra-button';

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

  render() {
    return (
      <OverlayContainer style={{ height: '100px', width: '100%' }} >
        <LoadingOverlay isOpen={this.state.show} isAnimated isRelativeToContainer={this.state.isRelativeToContainer} />
        <Button onClick={this.handleTriggerOverlay}>Trigger Container Overlay</Button>
        <Button onClick={this.handleTriggerFullScreenOverlay}>Trigger FullScreen Overlay</Button>
      </OverlayContainer>
    );
  }
}

export default OverlayExample;
