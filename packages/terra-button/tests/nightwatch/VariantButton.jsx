import React from 'react';

import Button from '../../lib/Button';

const iconStyle = { backgroundColor: 'black' };
const icon = <svg width="1em" height="1em" style={iconStyle} className="test"><rect width="1em" height="1em" /></svg>;

const NeutralButton = () => <div id="neutral" style={{ padding: '5px' }}>
  <Button id="neutralButton" text="Neutral" variant="neutral" />
  <Button id="neutralButtonDisabled" text="Neutral Disabled" variant="neutral" isDisabled />
</div>;

const EmphasisButton = () => <div id="emphasis" style={{ padding: '5px' }}>
  <Button id="emphasisButton" text="Emphasis" variant="emphasis" />
  <Button id="emphasisButtonDisabled" text="Emphasis Disabled" variant="emphasis" isDisabled />
</div>;

const DeemphasisButton = () => <div id="de-emphasis" style={{ padding: '5px' }}>
  <Button id="de-emphasisButton" text="De-emphasis" variant="de-emphasis" />
  <Button id="de-emphasisButtonDisabled" text="De-emphasis Disabled" variant="de-emphasis" isDisabled />
</div>;

const ActionButton = () => <div id="action" style={{ padding: '5px' }}>
  <Button id="actionButton" text="Action" icon={icon} variant="action" />
  <Button id="actionButtonDisabled" text="Action Disabled" icon={icon} variant="action" isDisabled />
</div>;

const UtilityButton = () => <div id="utility" style={{ padding: '5px' }}>
  <Button id="utilityButton" text="Utility" icon={icon} variant="utility" />
  <Button id="utilityButtonDisabled" text="Utility Disabled" icon={icon} variant="utility" isDisabled />
</div>;

export {
  NeutralButton,
  EmphasisButton,
  DeemphasisButton,
  ActionButton,
  UtilityButton,
};
