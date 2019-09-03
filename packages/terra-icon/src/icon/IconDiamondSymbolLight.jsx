/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path fill="#fff" d="M2.08 24L23.928 2.15 45.779 24l-21.85 21.849z" ></path><path d="M24 4.2L43.8 24 24 43.8 4.2 24 24 4.2M24 0L0 24l24 24 24-24L24 0z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconDiamondSymbolLight";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
