import React from 'react';
import ResponsiveElement from 'terra-responsive-element';

import './ResponsiveExample.scss';

class Example extends React.Component {
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
        <div className={`terra-responsive-example-container terra-responsive-example-container--${this.state.size}`}>
          <ResponsiveElement
            responsiveTo="window"
            defaultElement={<div>Default</div>}
            tiny={<div>Tiny</div>}
            small={<div>Small</div>}
            medium={<div>Medium</div>}
            large={<div>Large</div>}
            huge={<div>Huge</div>}
          />
        </div>
      </div>
    );
  }
}

export default Example;
