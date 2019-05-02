import React from 'react';

import Button from '../../../../Button';

const GhostButton = () => (
  <div id="ghost" style={{ padding: '5px' }}>
    <Button id="ghostButton" text="Ghost" variant="ghost" />
    <Button id="ghostButtonDisabled" text="Ghost Disabled" variant="ghost" isDisabled />
  </div>
);

export default GhostButton;
