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

    this.state = {
      activeBreakpoint: activeBreakpointForSize(window.innerWidth),
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.setActiveBreakpoint);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setActiveBreakpoint);
  }

  setActiveBreakpoint() {
    const { activeBreakpoint } = this.state;
    const newBreakpoint = activeBreakpointForSize(window.innerWidth);

    if (activeBreakpoint !== newBreakpoint) {
      this.setState({
        activeBreakpoint: newBreakpoint,
      });
    }
  }

  render() {
    const { children } = this.props;
    const { activeBreakpoint } = this.state;

    return (
      <ActiveBreakpointContext.Provider value={activeBreakpoint}>
        {children}
      </ActiveBreakpointContext.Provider>
    );
  }
}

ActiveBreakpointProvider.propTypes = propTypes;

export default ActiveBreakpointProvider;
