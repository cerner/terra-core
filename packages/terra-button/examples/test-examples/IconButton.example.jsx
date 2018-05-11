import React from 'react';

import Button from '../../lib/Button';

const spacingStyle = { padding: '20px' };

const iconStyle = { backgroundColor: 'black', height: '1em', width: '1em' };
const icon = <span style={iconStyle} className="test"><svg width="1em" height="1em"><rect width="1em" height="1em" /></svg></span>;

const IconNeutralButton = () => <Button id="iconNeutralButton" text="Button with Icon" icon={icon} />;
const IconOnlyButton = () => <Button id="iconOnlyButton" text="iconOnlyButton" isIconOnly icon={icon} />;
const IconReversedButton = () => <Button id="iconReversedButton" text="Button with Icon and reversed" icon={icon} isReversed />;


export default () => (
  <div>
    <IconNeutralButton />
    <div style={spacingStyle} />
    <IconOnlyButton />
    <div style={spacingStyle} />
    <IconReversedButton />
  </div>
);
