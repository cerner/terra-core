import React, { useState } from 'react';
import Placeholder from 'terra-doc-template/lib/Placeholder';
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
