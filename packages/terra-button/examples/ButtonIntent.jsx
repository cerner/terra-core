import React from 'react';
import Button from '../src/Button';


const ButtonIntent = () => (
  <div>
    <Button text="Default" />
    <Button intent="primary" text="Primary" />
    <Button intent="secondary" text="Secondary" />
    <Button intent="positive" text="Positive" />
    <Button intent="negative" text="Negative" />
    <Button intent="warning" text="Warning" />
    <Button intent="info" text="Info" />
  </div>
);

export default ButtonIntent;
