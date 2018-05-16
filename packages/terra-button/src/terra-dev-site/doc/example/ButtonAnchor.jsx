import React from 'react';
import Button from '../../../Button';

const buttonStyle = { margin: '5px' };

const ButtonAnchor = () => (
  <Button href="#" text="I am rendered with an anchor tag" style={buttonStyle} />
);

export default ButtonAnchor;
