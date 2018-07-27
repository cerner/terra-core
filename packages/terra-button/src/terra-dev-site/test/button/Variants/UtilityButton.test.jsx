import React from 'react';

import Button from '../../../../Button';
import IconSquare from 'terra-icon/lib/icon/IconSquareSymbol';

const UtilityButton = () => (
  <div id="utility" style={{ padding: '5px' }}>
    <Button id="utilityButton" text="Utility" icon={<IconSquare />} variant="utility" />
    <Button id="utilityButtonDisabled" text="Utility Disabled" icon={<IconSquare />} variant="utility" isDisabled />
  </div>);

export default UtilityButton;
