/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import Button from 'terra-button';
import Overlay from '../src/Overlay';

const content = (
  <div style={{ padding: '50px 50px', color: 'white' }}>
    <h1>Tap and See</h1>
    <Button text="I am a button" size="large" />
    <a href="https://www.google.com/"><h2 style={{ color: 'white' }}>I am a link</h2></a>
    <input type="text" value="I am a text input" style={{ height: 20, width: 200, fontSize: 20 }} />
  </div>
);

export default class OverlayTrapFocus extends Component {
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
      <div style={{ padding: '0 10px' }}>
        <Button onClick={this.toggleOverlay} text="Overlay Focus" />
        <Overlay
          isOpen={this.state.isOpen}
          onRequestClose={this.toggleOverlay}
        >
          {content}
        </Overlay>
      </div>
    );
  }
}
