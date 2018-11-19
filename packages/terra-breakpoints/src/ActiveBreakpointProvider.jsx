import React from 'react';
import ActiveBreakpointContext from './ActiveBreakpointContext';
import { activeBreakpointForSize } from './breakpoints';

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

export default ActiveBreakpointProvider;