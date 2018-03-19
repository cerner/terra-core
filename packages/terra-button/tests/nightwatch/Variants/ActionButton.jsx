import React from 'react';

import Button from '../../../lib/Button';

const iconStyle = { backgroundColor: 'black' };
const icon = <svg width="1em" height="1em" style={iconStyle} className="test"><rect width="1em" height="1em" /></svg>;

const ActionButton = () => <div id="action" style={{ padding: '5px' }}>
  <Button id="actionButton" text="Action" icon={icon} variant="action" />
  <Button id="actionButtonDisabled" text="Action Disabled" icon={icon} variant="action" isDisabled />
</div>;

export default ActionButton;
