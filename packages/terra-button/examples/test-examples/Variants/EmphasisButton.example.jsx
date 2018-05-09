import React from 'react';

import Button from '../../../lib/Button';

const EmphasisButton = () => <div id="emphasis" style={{ padding: '5px' }}>
  <Button id="emphasisButton" text="Emphasis" variant="emphasis" />
  <Button id="emphasisButtonDisabled" text="Emphasis Disabled" variant="emphasis" isDisabled />
</div>;

export default EmphasisButton;
