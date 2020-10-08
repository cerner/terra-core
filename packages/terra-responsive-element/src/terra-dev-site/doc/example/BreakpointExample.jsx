import React, { useState } from 'react';
import { Placeholder } from '@cerner/terra-docs';
import ResponsiveElement from 'terra-responsive-element';

const BreakpointExample = () => {
  const [breakpoint, setBreakpoint] = useState('');

  return (
    <ResponsiveElement onChange={value => setBreakpoint(value)}>
      <Placeholder title={breakpoint} />
    </ResponsiveElement>
  );
};

export default BreakpointExample;
