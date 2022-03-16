/* eslint-disable */
import React from 'react';
import IconBaseDec from '../../IconBaseDec';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBaseDec {...attributes}>
      <path fill="#FFF" d="M42.7 41H5.3L24 9.8z" ></path><path d="M24 4L0 44h48L24 4zm0 5.8L42.7 41H5.3L24 9.8z" ></path>
    </IconBaseDec>
  );
};

SvgIcon.displayName = "IconTriangleSymbolLightDec";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
