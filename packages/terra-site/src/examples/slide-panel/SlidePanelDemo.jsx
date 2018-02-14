import React from 'react';
import PropTypes from 'prop-types';
import SlidePanel from 'terra-slide-panel';

const mainContentForSlidePanel = togglePanelHandler => (
  <div>
    <header style={{ backgroundColor: 'lightgrey' }}>
      <h3 style={{ margin: '0px', padding: '5px', display: 'inline-block' }}>Main Content</h3>
      <button onClick={togglePanelHandler} style={{ display: 'inline-block' }}>Toggle Panel</button>
    </header>
    <div style={{ margin: '5px' }}>
      <p>
        This is the main content area of the slide panel.
        The overall height of the SlidePanel is determined by
        the intrinsic height of the content in this container.
      </p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
        <li>Item 6</li>
        <li>Item 7</li>
        <li>Item 8</li>
      </ul>
    </div>
  </div>
);

const panelContentForSlidePanel = (togglePanelHandler, toggleFullscreenHandler) => (
  <div>
    <header style={{ backgroundColor: 'lightgrey' }}>
      <h3 style={{ margin: '0px', padding: '5px', display: 'inline-block' }}>Panel Content</h3>
      <button onClick={togglePanelHandler} style={{ display: 'inline-block' }}>Toggle Panel</button>
      <button onClick={toggleFullscreenHandler} style={{ display: 'inline-block' }}>Toggle Fullscreen</button>
    </header>
    <div style={{ margin: '5px' }}>
      <p>This is the panel content area of the slide panel.</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
        <li>Item 6</li>
        <li>Item 7</li>
        <li>Item 8</li>
        <li>Item 9</li>
        <li>Item 10</li>
        <li>Item 11</li>
        <li>Item 12</li>
        <li>Item 13</li>
        <li>Item 14</li>
        <li>Item 15</li>
      </ul>
    </div>
  </div>
);

class SlidePanelDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      panelIsOpen: props.isOpen || false,
      panelIsFullscreen: props.isFullscreen || false,
    };

    this.handlePanelToggle = this.handlePanelToggle.bind(this);
    this.handleFullscreenToggle = this.handleFullscreenToggle.bind(this);
  }

  handlePanelToggle() {
    const newState = this.state;

    newState.panelIsOpen = !this.state.panelIsOpen;

    if (!newState.panelIsOpen) {
      newState.panelIsFullscreen = false;
    }

    this.setState(newState);
  }

  handleFullscreenToggle() {
    const newState = this.state;

    newState.panelIsFullscreen = !this.state.panelIsFullscreen;

    this.setState(newState);
  }

  render() {
    const containerAttributes = {
      style: { border: '1px lightgrey solid' },
    };

    return (
      <div style={{ padding: '5px' }}>
        <div {...containerAttributes}>
          <SlidePanel
            mainContent={mainContentForSlidePanel(this.handlePanelToggle)}
            panelContent={panelContentForSlidePanel(this.handlePanelToggle, this.handleFullscreenToggle)}
            panelSize={this.props.panelSize}
            panelBehavior={this.props.panelBehavior}
            panelPosition={this.props.panelPosition}
            isOpen={this.state.panelIsOpen}
            isFullscreen={this.state.panelIsFullscreen}
            fill={this.props.fill}
          />
        </div>
      </div>
    );
  }
}

SlidePanelDemo.propTypes = {
  panelBehavior: PropTypes.oneOf(['overlay', 'squish']),
  panelPosition: PropTypes.oneOf(['start', 'end']),
  panelSize: PropTypes.oneOf(['small', 'large']),
  isFullscreen: PropTypes.bool,
  isOpen: PropTypes.bool,
  fill: PropTypes.bool,
};

export default SlidePanelDemo;
