import React from 'react';
import Button from 'terra-button';

const ButtonLink = () => (
  <div>
    <Button text="Link Default" variant="link" />
    <Button intent="primary" text="Link Primary" variant="link" />
    <Button intent="secondary" text="Link Secondary" variant="link" />
    <Button intent="positive" text="Link Positive" variant="link" />
    <Button intent="negative" text="Link Negative" variant="link" />
    <Button intent="warning" text="Link Warning" variant="link" />
    <Button intent="info" text="Link Info" variant="link" />
  </div>
);

export default ButtonLink;
