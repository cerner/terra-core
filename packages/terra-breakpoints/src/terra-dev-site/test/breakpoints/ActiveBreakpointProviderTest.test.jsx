import React from 'react';
import { ActiveBreakpointProvider, withActiveBreakpoint } from '../../../index';

const ActiveBreakpointConsumer = withActiveBreakpoint(({ activeBreakpoint }) => (
  <div>
    <p>
      The active breakpoint is:
      {' '}
      {activeBreakpoint.activeBreakpoint}
      <br></br>
      <br></br>
      The event ('resize'/'orientationchange'):
      {' '}
      {activeBreakpoint.source}
      <br></br>
      <br></br>
      The innerWidth:
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
