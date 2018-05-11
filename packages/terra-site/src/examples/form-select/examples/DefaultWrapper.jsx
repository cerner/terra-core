import React from 'react';
import DefaultExample from './Default';

const DefaultWrapper = () => (
  <div>
    <p>A default variant allows selecting a single option.</p>
    <div style={{ paddingBottom: '15px', width: '300px' }}>
      <DefaultExample />
    </div>
  </div>
);

export default DefaultWrapper;
