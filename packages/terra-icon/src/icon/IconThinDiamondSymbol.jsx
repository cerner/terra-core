/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M24 0l14 24-14 24-14-24L24 0z"/></svg>`;
  return (
    <IconBase {...attributes} svgSource={svgString} > </IconBase>
  );
};

SvgIcon.displayName = "IconThinDiamondSymbol";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;

/* eslint-enable */
