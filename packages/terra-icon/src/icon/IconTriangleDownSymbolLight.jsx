/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#FFF" d="M42.7 7L24 38.2 5.3 7z"/><path d="M0 4l24 40L48 4H0zm42.7 3L24 38.2 5.3 7h37.4z"/></svg>`;
  return (
    <IconBase {...attributes} svgSource={svgString} > </IconBase>
  );
};

SvgIcon.displayName = "IconTriangleDownSymbolLight";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;

/* eslint-enable */
