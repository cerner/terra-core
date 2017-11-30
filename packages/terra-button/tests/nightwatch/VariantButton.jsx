import React from 'react';

import Button from '../../lib/Button';

const NeutralButton = () => <Button id="neutralButton" text="Neutral" variant="neutral" />;
const PrimaryButton = () => <Button id="primaryButton" text="Primary" variant="primary" />;
const SecondaryButton = () => <Button id="secondaryButton" text="Secondary" variant="secondary" />;

export {
  NeutralButton,
  PrimaryButton,
  SecondaryButton,
};
