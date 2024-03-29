import React from 'react';
import { ActiveBreakpointProvider, withActiveBreakpoint } from 'terra-breakpoints';

const ActiveBreakpointConsumer = withActiveBreakpoint(({ activeBreakpoint }) => (
  <div>
    <p>
      The active breakpoint is:
      {' '}
      {activeBreakpoint}
    </p>
  </div>
));

const ActiveBreakpointProviderTest = () => (
  <ActiveBreakpointProvider>
    <ActiveBreakpointConsumer />
  </ActiveBreakpointProvider>
);

export default ActiveBreakpointProviderTest;
