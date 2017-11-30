import React from 'react';

import Button from '../../lib/Button';

const NeutralButton = () => <Button id="neutralButton" text="Neutral" variant="neutral" />;
const EmphasisButton = () => <Button id="emphasisButton" text="Emphasis" variant="emphasis" />;
const SecondaryButton = () => <Button id="secondaryButton" text="Secondary" variant="secondary" />;

export {
  NeutralButton,
  EmphasisButton,
  SecondaryButton,
};
