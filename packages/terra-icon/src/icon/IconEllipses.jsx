/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const svgString = `<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M24 18.6a5.4 5.4 0 11-5.4 5.4 5.38 5.38 0 015.4-5.4zm18.6 0a5.4 5.4 0 11-5.4 5.4 5.38 5.38 0 015.4-5.4zm-37.2 0A5.4 5.4 0 110 24a5.38 5.38 0 015.4-5.4z"/></svg>`;
  return (
    <IconBase {...attributes} svgSource={svgString} > </IconBase>
  );
};

SvgIcon.displayName = "IconEllipses";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;

/* eslint-enable */
