import React from 'react';
import Hookshot from '../../lib/Hookshot';

const HookshotContent = props => (
  <Hookshot.Content
    {...props}
  >
    <div style={{ backgroundColor: 'powderblue', height: '36px', width: '200px' }}>Hookshot</div>
  </Hookshot.Content>
);

export default HookshotContent;
