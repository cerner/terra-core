import React from 'react';

import Button from '../../lib/Button';

const TinyButton = () => <Button id="tinyButton" text="Tiny" size="tiny" />;
const SmallButton = () => <Button id="smallButton" text="Small" size="small" />;
const MediumButton = () => <Button id="mediumButton" text="Medium" size="medium" />;
const LargeButton = () => <Button id="largeButton" text="Large" size="large" />;
const HugeButton = () => <Button id="hugeButton" text="Huge" size="huge" />;

export {
  TinyButton,
  SmallButton,
  MediumButton,
  LargeButton,
  HugeButton,
};
