import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Button from 'terra-button/lib/Button';

const buttonStyle = { margin: '5px' };

const ButtonOnClick = () => (
  // eslint-disable-next-line no-alert
  <Button text="Click Me" onClick={() => alert('Ive been clicked!')} style={buttonStyle} />
);

export default ButtonOnClick;
