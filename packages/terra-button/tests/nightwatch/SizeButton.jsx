import React from 'react';

import Button from '../../lib/Button';

const TinyButton = () => <Button text="Tiny" size="tiny" />;
const SmallButton = () => <Button text="Small" size="small" />;
const MediumButton = () => <Button text="Medium" size="medium" />;
const LargeButton = () => <Button text="Large" size="large" />;
const HugeButton = () => <Button text="Huge" size="huge" />;

export {
  TinyButton,
  SmallButton,
  MediumButton,
  LargeButton,
  HugeButton,
};
