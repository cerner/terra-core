import React from 'react';

import Button from '../../lib/Button';

const NeutralButton = () => <Button id="neutralButton" text="Neutral" variant="neutral" />;
const EmphasisButton = () => <Button id="emphasisButton" text="Emphasis" variant="emphasis" />;
const DeemphasisButton = () => <Button id="de-emphasisButton" text="De-emphasis" variant="de-emphasis" />;

export {
  NeutralButton,
  EmphasisButton,
  DeemphasisButton,
};
