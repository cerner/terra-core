import React from 'react';
import Button from 'terra-button';

const buttonStyle = { margin: '5px' };

const ButtonDisabled = () => (
  <div>
    <Button text="Disabled Button" isDisabled style={buttonStyle} />
    <Button text="Disabled Primary" variant="primary" isDisabled style={buttonStyle} />
    <Button text="Disabled Secondary" variant="secondary" isDisabled style={buttonStyle} />
    <Button text="Disabled Link" variant="link" isDisabled style={buttonStyle} />
  </div>
);

export default ButtonDisabled;
