import React from 'react';

import Button from '../../lib/Button';

const iconStyle = { backgroundColor: 'black', height: '1em', width: '1em' };
const icon = <span style={iconStyle} className="test"><svg width="1em" height="1em"><rect width="1em" height="1em" /></svg></span>;

const NeutralButton = () => <Button id="neutralButton" text="Neutral" variant="neutral" />;
const EmphasisButton = () => <Button id="emphasisButton" text="Emphasis" variant="emphasis" />;
const DeemphasisButton = () => <Button id="de-emphasisButton" text="De-emphasis" variant="de-emphasis" />;
const ActionButton = () => <Button id="actionButton" text="Action" icon={icon} variant="action" />;
const UtilityButton = () => <Button id="utilityButton" text="Utility" icon={icon} variant="utility" />;

export {
  NeutralButton,
  EmphasisButton,
  DeemphasisButton,
  ActionButton,
  UtilityButton,
};
