/* eslint-disable */
import React from 'react';
import IconBaseDec from '../IconBaseDec';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBaseDec {...attributes}>
      <path d="M37.7 24L14.2 48l-3.9-3.8L30 24 10.3 3.8 14.2 0z" ></path>
    </IconBaseDec>
  );
};

SvgIcon.displayName = "IconChevronRightDec";
SvgIcon.defaultProps = {"className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1","isBidi":true};

export default SvgIcon;
/* eslint-enable */
