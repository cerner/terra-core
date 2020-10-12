import React, { useState } from 'react';
import { Placeholder } from '@cerner/terra-docs';
import ResponsiveElement from 'terra-responsive-element';

const ResizeExample = () => {
  const [width, setWidth] = useState('');

  return (
    <ResponsiveElement onResize={value => setWidth(value)}>
      <Placeholder title={width} />
    </ResponsiveElement>
  );
};

export default ResizeExample;
