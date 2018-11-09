import React from 'react';
import ActiveBreakpointContext from './ActiveBreakpointContext';

const withActiveBreakpoint = (WrappedComponent) => {
  const WithActiveBreakpointComp = props => (
    <ActiveBreakpointContext.Consumer>
      {activeBreakpoint => <WrappedComponent {...props} activeBreakpoint={activeBreakpoint} />}
    </ActiveBreakpointContext.Consumer>
  );

  WithActiveBreakpointComp.displayName = `withActiveBreakpoint(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
  WithActiveBreakpointComp.WrappedComponent = WrappedComponent;

  return WithActiveBreakpointComp;
};

export default withActiveBreakpoint;
