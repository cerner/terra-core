# Terra Overlay

Overlay is fullscreen semi-transparent element that overlays content usually to mark it as disabled.
Overlays are used for:
- Shade out main content while mobile menus are open
- Share out main content while modals are open

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-overlay`
  - `yarn add terra-overlay`

## Usage

```jsx
import React, { Component } from 'react';
import Button from 'terra-button';
import Overlay from '../src/Overlay';
import './MyStyle.css';

export default class OverlayFullScreen extends Component {
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

export default class OverlayOnElement extends Component {
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
```
