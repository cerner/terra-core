/* eslint-disable */
import React from 'react';
import IconBaseDec from '../IconBaseDec';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBaseDec {...attributes}>
      <path d="M18.4 40.9L0 22.5l4.2-4.2 14.2 14.2L43.8 7.1l4.2 4.2z" ></path>
    </IconBaseDec>
  );
};

SvgIcon.displayName = "IconCheckmarkDec";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
/* eslint-enable */
