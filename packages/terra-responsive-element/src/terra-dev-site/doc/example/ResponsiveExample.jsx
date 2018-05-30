import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import ResponsiveElement from 'terra-responsive-element/lib/ResponsiveElement';
import 'terra-responsive-element/lib/terra-dev-site/doc/example/ResponsiveExample.scss';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

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
        <div className={`terra-responsive-example-container terra-responsive-example-container--${this.state.size}`}>
          <ResponsiveElement {...this.props} />
        </div>
      </div>
    );
  }
}

export default ResponsiveExample;
