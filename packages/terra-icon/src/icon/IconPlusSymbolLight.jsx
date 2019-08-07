/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path fill="#fff" d="M17.5 46.5v-16h-16v-13h16v-16h13v16h16v13h-16v16z" ></path><path d="M29 3v16h16v10H29v16H19V29H3V19h16V3h10m3-3H16v16H0v16h16v16h16V32h16V16H32V0z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconPlusSymbolLight";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
