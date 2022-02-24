/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const svgString = `<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M48 21H27V0h-6v21H0v6h21v21h6V27h21z"/></svg>`;
  return (
    <IconBase {...attributes} svgSource={svgString} > </IconBase>
  );
};

SvgIcon.displayName = "IconAdd";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;

/* eslint-enable */
