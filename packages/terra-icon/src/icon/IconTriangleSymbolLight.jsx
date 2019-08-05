/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path fill="#fff" d="M2.649 42.5L24 6.916 45.351 42.5H2.649z" ></path><path d="M24 9.831L42.7 41H5.3L24 9.831M24 4L0 44h48L24 4z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconTriangleSymbolLight";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
/* eslint-enable */
