import React from 'react';

import Button from '../../../lib/Button';

const DeemphasisButton = () => <div id="de-emphasis" style={{ padding: '5px' }}>
  <Button id="de-emphasisButton" text="De-emphasis" variant="de-emphasis" />
  <Button id="de-emphasisButtonDisabled" text="De-emphasis Disabled" variant="de-emphasis" isDisabled />
</div>;

export default DeemphasisButton;
