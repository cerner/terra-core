import React from 'react';
import Button from 'terra-button';

const buttonStyle = { margin: '5px' };

const ButtonOnClick = () => (
  // eslint-disable-next-line no-alert
  <Button text="Click Me" onClick={() => alert('Ive been clicked!')} style={buttonStyle} />
);

export default ButtonOnClick;
