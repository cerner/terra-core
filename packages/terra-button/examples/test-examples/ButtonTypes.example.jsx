import React from 'react';

import Button from '../../lib/Button';

const spacingStyle = { padding: '20px' };

const ButtonWithTypeButton = () => <Button id="buttonWithTypeButton" text="Button Type is Default" type="button" />;
const ButtonWithTypeReset = () => <Button id="buttonWithTypeReset" text="Button Type is Reset" type="reset" />;
const ButtonWithTypeSubmit = () => <Button id="buttonWithTypeSubmit" text="Button Type is Submit" type="submit" />;

export default () => (
  <div>
    <ButtonWithTypeButton />
    <div style={spacingStyle} />
    <ButtonWithTypeReset />
    <div style={spacingStyle} />
    <ButtonWithTypeSubmit />
  </div>
);
