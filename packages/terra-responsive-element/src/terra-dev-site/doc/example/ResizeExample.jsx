import React, { useState } from 'react';
import Placeholder from 'terra-doc-template/lib/Placeholder';
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
