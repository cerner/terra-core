import React from 'react';
import Button from 'terra-button';

const ButtonDisabled = () => (
  <div>
    <Button text="Disabled Button" isDisabled />
    <Button text="Disabled Primary" variant="primary" isDisabled />
    <Button text="Disabled Secondary" variant="secondary" isDisabled />
    <Button text="Disabled Link" variant="link" isDisabled />
  </div>
);

export default ButtonDisabled;
