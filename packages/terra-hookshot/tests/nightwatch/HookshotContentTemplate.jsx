import React from 'react';
import Hookshot from '../../lib/Hookshot';

const HookshotContent = props => (
  <Hookshot.Content
    closeOnEsc
    closeOnOutsideClick
    closeOnResize
    {...props}
  >
    <div style={{ backgroundColor: 'powderblue', height: '35px', width: '200px' }}>Hookshot</div>
  </Hookshot.Content>
);

export default HookshotContent;
