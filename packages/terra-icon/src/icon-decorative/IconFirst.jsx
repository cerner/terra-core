/* eslint-disable */
import React from 'react';
import IconBaseDec from '../IconBaseDec';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBaseDec {...attributes}>
      <path d="M16.2 24L39.6 0l3.9 3.9L23.8 24l19.7 20.1-3.9 3.8zM5 0h6v48H5z" ></path>
    </IconBaseDec>
  );
};

SvgIcon.displayName = "IconFirstDec";
SvgIcon.defaultProps = {"className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1","isBidi":true};

export default SvgIcon;
/* eslint-enable */
