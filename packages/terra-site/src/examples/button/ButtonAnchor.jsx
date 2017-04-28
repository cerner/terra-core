import React from 'react';
import Button from 'terra-button';

const buttonStyle = { margin: '5px' };

const ButtonAnchor = () => (
  <Button href="#" text="I am rendered with an anchor tag" style={buttonStyle} />
);

export default ButtonAnchor;
