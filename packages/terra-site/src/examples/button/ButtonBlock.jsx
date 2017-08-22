import React from 'react';
import Button from 'terra-button';

const buttonStyle = { margin: '5px' };

const ButtonBlock = () => (
  <div>
    <Button text="Default Block" isBlock style={buttonStyle} />
    <Button text="Primary Block" isBlock style={buttonStyle} variant="primary" />
  </div>
);

export default ButtonBlock;
