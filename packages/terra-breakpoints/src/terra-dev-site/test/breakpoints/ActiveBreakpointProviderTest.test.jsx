import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import { ActiveBreakpointProvider, withActiveBreakpoint } from '../../../index';

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
