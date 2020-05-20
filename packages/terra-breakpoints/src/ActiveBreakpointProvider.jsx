import React from 'react';
import PropTypes from 'prop-types';
import ActiveBreakpointContext from './ActiveBreakpointContext';
import { activeBreakpointForSize } from './breakpoints';

const propTypes = {
  /**
   * The component(s) that will be wrapped by `<ActiveBreakpointContext.Provider />`.
   */
  children: PropTypes.node,
};

class ActiveBreakpointProvider extends React.Component {
  constructor(props) {
    super(props);

    this.setActiveBreakpoint = this.setActiveBreakpoint.bind(this);
    this.setActiveBreakpointFromOrientationchange = this.setActiveBreakpointFromOrientationchange.bind(this);

    this.state = {
      activeBreakpoint: activeBreakpointForSize(window.innerWidth),
      innerWidth: window.innerWidth,
      source: 'unknown',
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.setActiveBreakpoint);
    window.addEventListener('orientationchange', this.setActiveBreakpointFromOrientationchange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setActiveBreakpoint);
    window.removeEventListener('orientationchange', this.setActiveBreakpointFromOrientationchange);
  }

  setActiveBreakpoint() {
    const { activeBreakpoint } = this.state;
    const newBreakpoint = activeBreakpointForSize(window.innerWidth);

    if (activeBreakpoint !== newBreakpoint) {
      this.setState({
        activeBreakpoint: newBreakpoint,
        innerWidth: window.innerWidth,
        source: 'resize',
      });
    }
  }

  setActiveBreakpointFromOrientationchange() {
    const { activeBreakpoint } = this.state;
    const newBreakpoint = activeBreakpointForSize(window.innerWidth);

    if (activeBreakpoint !== newBreakpoint) {
      this.setState({
        activeBreakpoint: newBreakpoint,
        innerWidth: window.innerWidth,
        source: 'orientationchange',
      });
    }
  }

  render() {
    const { children } = this.props;
    const { activeBreakpoint, innerWidth, source } = this.state;
    const stateValue = {
      activeBreakpoint,
      innerWidth,
      source,
    };

    return (
      <ActiveBreakpointContext.Provider value={stateValue}>
        {children}
      </ActiveBreakpointContext.Provider>
    );
  }
}

ActiveBreakpointProvider.propTypes = propTypes;

export default ActiveBreakpointProvider;
