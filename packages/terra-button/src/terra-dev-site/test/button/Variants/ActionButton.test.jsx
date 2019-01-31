import React from 'react';
import IconSquare from 'terra-icon/lib/icon/IconSquareSymbol';

import Button from '../../../../Button';

const ActionButton = () => (
  <div id="action" style={{ padding: '5px' }}>
    <Button id="actionButton" text="Action" icon={<IconSquare />} variant="action" />
    <Button id="actionButtonDisabled" text="Action Disabled" icon={<IconSquare />} variant="action" isDisabled />
  </div>
);

export default ActionButton;
