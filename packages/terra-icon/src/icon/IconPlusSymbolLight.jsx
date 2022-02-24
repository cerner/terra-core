/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#FFF" d="M45 19v10H29v16H19V29H3V19h16V3h10v16z"/><path d="M32 16V0H16v16H0v16h16v16h16V32h16V16H32zm13 13H29v16H19V29H3V19h16V3h10v16h16v10z"/></svg>`;
  return (
    <IconBase {...attributes} svgSource={svgString} > </IconBase>
  );
};

SvgIcon.displayName = "IconPlusSymbolLight";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;

/* eslint-enable */
