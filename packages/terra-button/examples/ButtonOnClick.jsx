import React from 'react';
import Button from '../src/Button';

const ButtonOnClick = () => (
  <Button text="Click Me" onClick={() => alert('Ive been clicked!')} />
);

export default ButtonOnClick;
