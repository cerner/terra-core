import React from 'react';
import { ActiveBreakpointProvider, withActiveBreakpoint } from '../../../index';

const ActiveBreakpointConsumer = withActiveBreakpoint(({ activeBreakpoint }) => (
  <div>
    <p>
      The active breakpoint is:
      {' '}
      {activeBreakpoint.activeBreakpoint}
      {' '}
      {activeBreakpoint.source}
      {' '}
      {activeBreakpoint.innerWidth}
    </p>
  </div>
));

const ActiveBreakpointProviderTest = () => (
  <ActiveBreakpointProvider>
    <ActiveBreakpointConsumer />
  </ActiveBreakpointProvider>
);

export default ActiveBreakpointProviderTest;
