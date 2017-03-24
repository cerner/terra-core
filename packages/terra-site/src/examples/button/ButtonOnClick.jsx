import React from 'react';
import Button from 'terra-button';

const ButtonOnClick = () => (
  // eslint-disable-next-line no-alert
  <Button text="Click Me" onClick={() => alert('Ive been clicked!')} />
);

export default ButtonOnClick;
