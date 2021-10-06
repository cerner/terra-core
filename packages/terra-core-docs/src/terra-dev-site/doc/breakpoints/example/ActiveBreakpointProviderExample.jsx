import React from 'react';
import { ActiveBreakpointProvider, withActiveBreakpoint, ActiveBreakpointContext } from 'terra-breakpoints';

const ActiveBreakpointConsumer1 = withActiveBreakpoint(({ activeBreakpoint }) => (
  <div>
    <p>This component uses the withActiveBreakpoint() component generator to interface with the ActiveBreakpointProvider.</p>
    <p>
      The active breakpoint is:
      {' '}
      {activeBreakpoint}
    </p>
  </div>
));

const ActiveBreakpointConsumer2 = () => (
  <ActiveBreakpointContext.Consumer>
    {
      activeBreakpoint => (
        <div>
          <p>This component interfaces with the ActiveBreakpointContext directly.</p>
          <p>
            The active breakpoint is:
            {' '}
            {activeBreakpoint}
          </p>
        </div>
      )
    }
  </ActiveBreakpointContext.Consumer>
);

const ActiveBreakpointProviderExample = () => (
  <ActiveBreakpointProvider>
    <ActiveBreakpointConsumer1 />
    <hr />
    <ActiveBreakpointConsumer2 />
  </ActiveBreakpointProvider>
);

export default ActiveBreakpointProviderExample;
