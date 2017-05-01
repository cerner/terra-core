import React from 'react';
import Button from 'terra-button';

const buttonStyle = { margin: '5px' };

const ButtonVariant = () => (
  <div>
    <Button text="Default" style={buttonStyle} />
    <Button text="Primary" variant="primary" style={buttonStyle} />
    <Button text="Secondary" variant="secondary" style={buttonStyle} />
    <Button text="Link" variant="link" style={buttonStyle} />
  </div>
);

export default ButtonVariant;
