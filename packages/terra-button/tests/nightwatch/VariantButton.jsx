import React from 'react';

import Button from '../../lib/Button';

const DefaultButton = () => <Button id="defaultButton" text="Default" variant="default" />;
const PrimaryButton = () => <Button id="primaryButton" text="Primary" variant="primary" />;
const SecondaryButton = () => <Button id="secondaryButton" text="Secondary" variant="secondary" />;

export {
  DefaultButton,
  PrimaryButton,
  SecondaryButton,
};
