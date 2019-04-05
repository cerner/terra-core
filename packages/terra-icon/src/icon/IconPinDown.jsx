/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M35 29.9c0-3.8-1.6-7.4-4.4-10l-.6-.5V6h2c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H16c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h2v13.5l-.5.5c-2.8 2.6-4.5 6.2-4.5 10h9.5v18h3V30l9.5-.1z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconPinDown";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
