# Terra Overlay

Overlay is an element that overlays the viewport or a DOM element usually to mark it as disabled.
Common usage:
- Shade out main content while mobile menus are open
- Shade out main content while modals are open
- Shade out a panel and display a loading indicator while ajax call is running

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-overlay`
  - `yarn add terra-overlay`

## Usage

```jsx
import React, { Component } from 'react';
import Button from 'terra-button';
import Overlay from 'terra-overlay';
import './MyStyle.css';

class OverlayFullScreen extends Component {
  constructor() {
    super();
    this.state = { isOpen: false };
    this.toggleOverlay = this.toggleOverlay.bind(this);
  }

  toggleOverlay() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggleOverlay}/>
        <Overlay
          isOpen={this.state.isOpen}
          onRequestClose={this.toggleOverlay}
          className='my-class'
        >
          {<p>I am the content</p>}
        </Overlay>
      </div>
    );
  }
}

class OverlayOnElement extends Component {
  constructor() {
    super();
    this.state = { isOpen: false };
    this.toggleOverlay = this.toggleOverlay.bind(this);
  }

  toggleOverlay() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggleOverlay}/>
        <div ref={(container) => { this.container = container; }}>
          <Overlay
            isOpen={this.state.isOpen}
            container={this.container}
            isFullScreen={false}
          >
            {<p>I am the content</p>}
          </Overlay>
      </div>
    );
  }
}

export {
  OverlayFullScreen,
  OverlayOnElement,
}
```
