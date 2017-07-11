import React from 'react';

import Button from '../../lib/Button';

const iconStyle = { backgroundColor: 'black', height: '1em', width: '1em' };
const icon = <span style={iconStyle} className="test"><svg width="1em" height="1em"><rect width="1em" height="1em" /></svg></span>;

const IconDefaultButton = () => <Button id="iconDefaultButton" text="Button with Icon" icon={icon} />;
const IconOnlyButton = () => <Button id="iconOnlyButton" icon={icon} />;
const IconReversedButton = () => <Button id="iconReversedButton" text="Button with Icon and reversed" icon={icon} isReversed />;

export {
  IconDefaultButton,
  IconOnlyButton,
  IconReversedButton,
};
