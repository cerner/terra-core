import React from 'react';
import ResponsiveElement from 'terra-responsive-element';

import './ResponsiveExample.scss';

class ResponsiveExample extends React.Component {
  constructor() {
    super();
    this.state = { size: 'medium' };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(event) {
    this.setState({ size: event.target.value });
  }

  render() {
    return (
      <div>
        <span>Container Size: </span>
        <select value={this.state.size} onChange={this.handleSelectChange}>
          <option value="default">Default size</option>
          <option value="tiny">Tiny</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="huge">Huge</option>
        </select>
        <div className={`terra-ResponsiveExample-container terra-ResponsiveExample-container--${this.state.size}`}>
          <ResponsiveElement {...this.props} />
        </div>
      </div>
    );
  }
}

export default ResponsiveExample;
