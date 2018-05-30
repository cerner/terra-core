import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Button from 'terra-button/lib/Button';

const buttonStyle = { margin: '5px' };

const ButtonAnchor = () => (
  <Button href="#" text="I am rendered with an anchor tag" style={buttonStyle} />
);

export default ButtonAnchor;
