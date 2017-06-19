import React from 'react';

import Collapse from '../../lib/Collapse';

const InitiallyOpenCollapse = () => (
  <Collapse closedButtonText="Custom Text" isInitiallyOpen>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </Collapse>
);

export default InitiallyOpenCollapse;
