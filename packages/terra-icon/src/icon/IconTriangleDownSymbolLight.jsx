/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path fill="#fff" d="M2.6 5.5h42.8L24 41.1z" ></path><path d="M42.7 7L24 38.2 5.3 7h37.4M48 4H0l24 40L48 4z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconTriangleDownSymbolLight";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
