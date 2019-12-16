/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <script ></script><path fill="#FFF" d="M34.5 24L24 42 13.5 24 24 6z" ></path><path d="M24 0L10 24l14 24 14-24L24 0zm0 6l10.5 18L24 42 13.5 24 24 6z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconThinDiamondSymbolLight";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
