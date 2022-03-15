/* eslint-disable */
import React from 'react';
import IconBaseDec from '../IconBaseDec';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBaseDec {...attributes}>
      <path d="M18 15.7V42H4.9L18 15.7M21 3L0 45h21V3zm6 42h21L27 3v42z" ></path>
    </IconBaseDec>
  );
};

SvgIcon.displayName = "IconFlipHorizontalDec";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
