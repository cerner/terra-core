import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Placeholder from 'terra-doc-template/lib/Placeholder';

const placeholder = () => (
  <div style={{ height: '200px', width: '100%', background: 'black' }}>
    <Placeholder title="Light Placeholder" variant="light" />
  </div>
);

export default placeholder;
