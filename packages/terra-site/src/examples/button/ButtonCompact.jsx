import React from 'react';
import IconEdit from 'terra-icon/lib/icon/IconEdit';
import Button from 'terra-button';

const Icon = <IconEdit />;
const buttonStyle = { margin: '5px' };

const ButtonCompact = () => (
  <div>
    <Button text="Compact" isCompact style={buttonStyle} />
    <Button icon={Icon} text="icon" isCompact style={buttonStyle} />
    <Button icon={Icon} isCompact style={buttonStyle} />
  </div>
);

export default ButtonCompact;
