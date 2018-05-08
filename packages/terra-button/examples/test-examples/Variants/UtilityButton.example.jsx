import React from 'react';

import Button from '../../../lib/Button';

const iconStyle = { backgroundColor: 'black' };
const icon = <svg width="1em" height="1em" style={iconStyle} className="test"><rect width="1em" height="1em" /></svg>;

const UtilityButton = () => <div id="utility" style={{ padding: '5px' }}>
  <Button id="utilityButton" text="Utility" icon={icon} variant="utility" />
  <Button id="utilityButtonDisabled" text="Utility Disabled" icon={icon} variant="utility" isDisabled />
</div>;

export default UtilityButton;
