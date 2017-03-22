import React from 'react';
import Button from 'terra-button';

const ButtonOutline = () => (
  <div>
    <Button text="Outline Default" variant="outline" />
    <Button intent="primary" text="Outline Primary" variant="outline" />
    <Button intent="secondary" text="Outline Secondary" variant="outline" />
    <Button intent="positive" text="Outline Positive" variant="outline" />
    <Button intent="negative" text="Outline Negative" variant="outline" />
    <Button intent="warning" text="Outline Warning" variant="outline" />
    <Button intent="info" text="Outline Info" variant="outline" />
  </div>
);

export default ButtonOutline;
