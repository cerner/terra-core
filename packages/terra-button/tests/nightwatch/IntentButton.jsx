import React from 'react';

import Button from '../../lib/Button';

const InfoButton = () => <Button text="Info" intent="info" />;
const NegativeButton = () => <Button text="Negative" intent="negative" />;
const PositiveButton = () => <Button text="Positive" intent="positive" />;
const PrimaryButton = () => <Button text="Primary" intent="primary" />;
const SecondaryButton = () => <Button text="Secondary" intent="secondary" />;
const WarningButton = () => <Button text="Warning" intent="warning" />;

export {
  InfoButton,
  NegativeButton,
  PositiveButton,
  PrimaryButton,
  SecondaryButton,
  WarningButton,
};
