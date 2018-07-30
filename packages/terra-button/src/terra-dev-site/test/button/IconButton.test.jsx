import React from 'react';
import IconSquare from 'terra-icon/lib/icon/IconSquareSymbol';

import Button from '../../../Button';

const spacingStyle = { padding: '20px' };

const IconNeutralButton = () => <Button id="iconNeutralButton" text="Button with Icon" icon={<IconSquare />} />;
const IconOnlyButton = () => <Button id="iconOnlyButton" text="iconOnlyButton" isIconOnly icon={<IconSquare />} />;
const IconReversedButton = () => <Button id="iconReversedButton" text="Button with Icon and reversed" icon={<IconSquare />} isReversed />;


export default () => (
  <div>
    <IconNeutralButton />
    <div style={spacingStyle} />
    <IconOnlyButton />
    <div style={spacingStyle} />
    <IconReversedButton />
  </div>
);
