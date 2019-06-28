/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React, { useState } from 'react';
import Placeholder from 'terra-doc-template/lib/Placeholder';
import ResponsiveElement from '../../../ResponsiveElement';

const BreakpointExample = () => {
  const [breakpoint, setBreakpoint] = useState('');

  return (
    <ResponsiveElement onChange={value => setBreakpoint(value)}>
      <Placeholder title={breakpoint} />
    </ResponsiveElement>
  );
};

export default BreakpointExample;
