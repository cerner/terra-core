import React from 'react';

import Button from '../../../lib/Button';

const NeutralButton = () => <div id="neutral" style={{ padding: '5px' }}>
  <Button id="neutralButton" text="Neutral" variant="neutral" />
  <Button id="neutralButtonDisabled" text="Neutral Disabled" variant="neutral" isDisabled />
</div>;

export default NeutralButton;
