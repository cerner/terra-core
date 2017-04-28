import React from 'react';
import IconEdit from 'terra-icon/lib/icon/IconEdit';
import Button from 'terra-button';

const Icon = <IconEdit />;
const buttonStyle = { margin: '5px' };

const ButtonIcon = () => (
  <div>
    <Button icon={Icon} text="icon" style={buttonStyle} />
    <Button icon={Icon} text="icon" isReversed style={buttonStyle} />
    <Button icon={Icon} style={buttonStyle} />
  </div>
);

export default ButtonIcon;
