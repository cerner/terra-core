/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React, { Component } from 'react';
import Placeholder from 'terra-doc-template/lib/Placeholder';
import ResponsiveElement from '../../../ResponsiveElement';

class BreakpointExample extends Component {
  constructor() {
    super();

    this.state = { breakpoint: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(breakpoint) {
    this.setState({ breakpoint });
  }

  render() {
    const { breakpoint } = this.state;

    return (
      <ResponsiveElement onChange={this.handleChange}>
        <Placeholder title={breakpoint} />
      </ResponsiveElement>
    );
  }
}

export default BreakpointExample;
