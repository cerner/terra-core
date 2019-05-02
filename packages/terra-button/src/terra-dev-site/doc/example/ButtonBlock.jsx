import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Button from 'terra-button/lib/Button';

const buttonStyle = { margin: '5px' };

const ButtonBlock = () => (
  <Button text="Neutral Block" isBlock style={buttonStyle} />
);

export default ButtonBlock;
