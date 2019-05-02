import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Button from 'terra-button/lib/Button';

const buttonStyle = { margin: '5px' };

const ButtonCompact = () => (
  <div>
    <Button text="Neutral Standard" style={buttonStyle} />
    <Button text="Neutral Compact" isCompact style={buttonStyle} />
    <Button text="Emphasis Standard" variant="emphasis" style={buttonStyle} />
    <Button text="Emphasis Compact" variant="emphasis" isCompact style={buttonStyle} />
  </div>
);

export default ButtonCompact;
