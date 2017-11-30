import React from 'react';
import Button from 'terra-button';

const buttonStyle = { margin: '5px' };

const ButtonVariant = () => (
  <div>
    <Button text="Neutral" style={buttonStyle} />
    <Button text="Emphasis" variant="emphasis" style={buttonStyle} />
    <Button text="Secondary" variant="secondary" style={buttonStyle} />
  </div>
);

export default ButtonVariant;
