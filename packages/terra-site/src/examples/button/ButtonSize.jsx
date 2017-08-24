import React from 'react';
import Button from 'terra-button';

const buttonStyle = { margin: '5px' };

const ButtonSize = () => (
  <div>
    <Button size="tiny" text="Tiny button" style={buttonStyle} />
    <Button size="small" text="Small button" style={buttonStyle} />
    <Button size="medium" text="Medium button" style={buttonStyle} />
    <Button size="large" text="Large button" style={buttonStyle} />
    <Button size="huge" text="Huge button" style={buttonStyle} />
  </div>
);

export default ButtonSize;
