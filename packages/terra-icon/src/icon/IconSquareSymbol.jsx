/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M0 0h48v48H0V0z"/></svg>`;
  return (
    <IconBase {...attributes} svgSource={svgString} > </IconBase>
  );
};

SvgIcon.displayName = "IconSquareSymbol";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;

/* eslint-enable */
