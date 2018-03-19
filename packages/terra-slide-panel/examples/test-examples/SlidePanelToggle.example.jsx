import React from 'react';
import SlidePanel from '../../lib/SlidePanel';

class SlidePanelDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = { panelIsOpen: false };
    this.handlePanelToggle = this.handlePanelToggle.bind(this);
  }

  handlePanelToggle() {
    this.setState({ panelIsOpen: !this.state.panelIsOpen });
  }

  render() {
    return (
      <div style={{ border: '1px lightgrey solid', height: '768px', width: '100%', position: 'relative' }}>
        <SlidePanel
          id="test-slide"
          mainContent={<div style={{ height: '100%', width: '100%', backgroundColor: 'red' }}><button id="test-toggle" style={{ backgroundColor: 'green' }}onClick={this.handlePanelToggle}>toggle</button></div>}
          panelContent={<div style={{ height: '100%', width: '100%', backgroundColor: 'blue' }} />}
          panelSize="small"
          panelBehavior="overlay"
          isOpen={this.state.panelIsOpen}
          fill
        />
      </div>
    );
  }
}

export default SlidePanelDemo;
