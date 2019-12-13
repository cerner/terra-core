/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path fill="#FFF" d="M42.7 7L24 38.2 5.3 7z" ></path><path d="M0 4l24 40L48 4H0zm42.7 3L24 38.2 5.3 7h37.4z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconTriangleDownSymbolLight";
SvgIcon.defaultProps = {"height":"48","width":"48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
