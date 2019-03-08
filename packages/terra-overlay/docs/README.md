# Terra Overlay
The Overlay component is a component that creates an semi-transparent overlay screen that blocks interactions with the elements underneath the display. There are two types of overlays: fullscreen and relative to its container.

When creating as an overlay relative to its container, place the overlay component within the overaly wrapper and the element(s) which should be hidden by overlay within the content(children) wrapper of Overlay Container subcomponent.

A Loading Overlay is a specialized Overlay subcomponent that displays an overlay with a spinner icon and loading message.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-overlay`

## Usage

# Overlay
```jsx
import React from 'react';
import Button from 'terra-button';
import Overlay from 'terra-overlay';
import OverlayContainer from 'terra-overlay/lib/OverlayContainer';

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
      <OverlayContainer style={{ height: '100px', width: '100%' }} >'
      // Overlay will be wrapped within overlay prop of Overlay Container
        <Overlay isOpen={this.state.show} isRelativeToContainer onRequestClose={this.handleOnRequestESC}>
          <p>Close by clicking the overlay or pressing the ESC key.</p>
        </Overlay>
      // content div will be wrapped within children prop of Overlay Container 
        <div>
          <Button onClick={this.handleTriggerOverlay} text="Trigger Overlay" />
        <div>
      </OverlayContainer>
    );
  }
}

export default OverlayExample;
```

# LoadingOverlay
```jsx
import React from 'react';
import Button from 'terra-button';
import LoadingOverlay from 'terra-overlay/lib/LoadingOverlay';
import OverlayContainer from 'terra-overlay/lib/OverlayContainer';

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
      <OverlayContainer>
        // Loading Overlay will be wrapped within overlay prop of Overlay Container 
        <LoadingOverlay isOpen={this.state.show} isAnimated />
        // content div will be wrapped within children prop of Overlay Container 
        <div> 
          <Button onClick={this.handleTriggerOverlay} text="Trigger Loading Overlay" />
        </div>
      </OverlayContainer>
    );
  }
}

export default LoadingOverlayExample;
```
