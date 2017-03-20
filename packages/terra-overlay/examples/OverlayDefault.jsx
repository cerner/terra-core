/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import Button from 'terra-button';
import Overlay from '../src/Overlay';

export default class OverlayDefault extends Component {
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
        <Button onClick={this.toggleOverlay} text="Default Overlay" />
        <Overlay
          isOpen={this.state.isOpen}
          onRequestClose={this.toggleOverlay}
        />
      </div>
    );
  }
}
