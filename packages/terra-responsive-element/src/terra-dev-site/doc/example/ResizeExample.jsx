/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React, { Component } from 'react';
import Placeholder from 'terra-doc-template/lib/Placeholder';
import ResponsiveElement from '../../../ResponsiveElement';

class BreakpointExample extends Component {
  constructor() {
    super();

    this.state = { width: '' };
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize(width) {
    this.setState({ width: width.toString() });
  }

  render() {
    const { width } = this.state;

    return (
      <ResponsiveElement onResize={this.handleResize}>
        <Placeholder title={width} />
      </ResponsiveElement>
    );
  }
}

export default BreakpointExample;
