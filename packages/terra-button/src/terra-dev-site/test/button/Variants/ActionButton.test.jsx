import React from 'react';

import Button from '../../../../Button';
import IconSquare from 'terra-icon/lib/icon/IconSquareSymbol';

const ActionButton = () => (
  <div id="action" style={{ padding: '5px' }}>
    <Button id="actionButton" text="Action" icon={<IconSquare />} variant="action" />
    <Button id="actionButtonDisabled" text="Action Disabled" icon={<IconSquare />} variant="action" isDisabled />
  </div>);

export default ActionButton;
