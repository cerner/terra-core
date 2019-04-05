/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M6 4.9L32.3 18H6V4.9M3 0v21h42L3 0zm0 27v21l42-21H3z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconFlipVertical";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
