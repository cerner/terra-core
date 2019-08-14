/**
 * This test file is intended to test that a controlled implementation of the responsive element
 * renders the correct component at every breakpoint.
 */

import React from 'react';
import ResponsiveElement from 'terra-responsive-element';

class Controlled extends React.Component {
  constructor() {
    super();

    this.state = { breakpoint: undefined };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(breakpoint) {
    this.setState({ breakpoint });
  }

  render() {
    const { breakpoint } = this.state;

    let children = null;
    if (breakpoint === 'tiny') {
      children = <div>Tiny</div>;
    } else if (breakpoint === 'small') {
      children = <div>Small</div>;
    } else if (breakpoint === 'medium') {
      children = <div>Medium</div>;
    } else if (breakpoint === 'large') {
      children = <div>Large</div>;
    } else if (breakpoint === 'huge') {
      children = <div>Huge</div>;
    } else if (breakpoint === 'enormous') {
      children = <div>Enormous</div>;
    }

    return (
      <ResponsiveElement onChange={this.handleOnChange}>
        {children}
      </ResponsiveElement>
    );
  }
}

export default Controlled;
