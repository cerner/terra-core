import React from 'react';

import Button from '../../lib/Button';

const ButtonWithTypeButton = () => <Button text="Button Type is Default" type="button" />;
const ButtonWithTypeReset = () => <Button text="Button Type is Reset" type="reset" />;
const ButtonWithTypeSubmit = () => <Button text="Button Type is Submit" type="submit" />;

export {
  ButtonWithTypeButton,
  ButtonWithTypeReset,
  ButtonWithTypeSubmit,
};
