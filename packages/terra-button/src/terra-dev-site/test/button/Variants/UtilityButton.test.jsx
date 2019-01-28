import React from 'react';
import IconSquare from 'terra-icon/lib/icon/IconSquareSymbol';

import Button from '../../../../Button';

const UtilityButton = () => (
  <div id="utility" style={{ padding: '5px' }}>
    <Button id="utilityButton" text="Utility" icon={<IconSquare />} variant="utility" />
    <Button id="utilityButtonDisabled" text="Utility Disabled" icon={<IconSquare />} variant="utility" isDisabled />
  </div>
);

export default UtilityButton;
