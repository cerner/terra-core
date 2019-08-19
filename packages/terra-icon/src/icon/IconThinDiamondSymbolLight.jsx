/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path fill="#fff" d="M11.7 24L24 3l12.3 21L24 45z" ></path><path d="M24 6l10.5 18L24 42 13.5 24 24 6m0-6L10 24l14 24 14-24L24 0z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconThinDiamondSymbolLight";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
