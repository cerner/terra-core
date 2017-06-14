# Terra Overlay

The Terra Overlay component is a component that displays an overlay relative to the container that triggered the overlay. This component blocks interactions and fades out all elements of the triggering container.

A Loading Overlay is a subcomponent that displays an overlay with a spinner icon and loading message.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-overlay`

## Usage

# Overlay
```jsx
import React from 'react';
import Button from 'terra-button';
import Overlay from 'terra-clinical-overlay';

class OverlayExample extends React.Component {
  constructor() {
    super();
    this.state = { show: false };
    this.handleTriggerOverlay = this.handleTriggerOverlay.bind(this);
    this.handleOnRequestESC = this.handleOnRequestESC.bind(this);
  }

  handleTriggerOverlay() {
    this.setState({ show: true });
  }

  handleOnRequestESC() {
    this.setState({ show: false });
  }

  render() {
    return (
      <Overlay.OverlayContainer style={{ height: '100px', width: '100%' }} >
        <Overlay isOpen={this.state.show} isRelativeToContainer onRequestClose={this.handleOnRequestESC}>
          <p>Close by clicking the overlay or pressing the ESC key.</p>
        </Overlay>
        <Button onClick={this.handleTriggerOverlay}>Trigger Overlay</Button>
      </Overlay.OverlayContainer>
    );
  }
}

export default OverlayExample;
```

# LoadingOverlay
```jsx
import React from 'react';
import Button from 'terra-button';
import Overlay.LoadingOverlay from 'terra-clinical-overlay';

class LoadingOverlayExample extends React.Component {
  constructor() {
    super();
    this.state = { show: false };
    this.handleTriggerOverlay = this.handleTriggerOverlay.bind(this);
  }

  handleTriggerOverlay() {
    this.setState({ show: true });

    setTimeout(() => {
      this.setState({ show: false });
    }, 5000);
  }

  render() {
    return (
      <div>
        <LoadingOverlay isOpen={this.state.show} isAnimated />
        <Button onClick={this.handleTriggerOverlay}>Trigger Loading Overlay</Button>
      </div>
    );
  }
}

export default LoadingOverlayExample;
```
