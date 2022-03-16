/* eslint-disable */
import React from 'react';
import IconBaseDec from '../../IconBaseDec';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBaseDec {...attributes} >
      <path d="M25 0h23v11H25zm0 39h10v9H25zm0-25h10v22H25zm13 0h10v34H38zM0 0h22v27H0zm0 30h22v18H0z" ></path>
    </IconBaseDec>
  );
};

SvgIcon.displayName = "IconTreemapDec";
SvgIcon.defaultProps = {"className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1","isBidi":true};

export default SvgIcon;
/* eslint-enable */
