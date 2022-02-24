/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const svgString = `<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M24 0L.1 23.5l3.8 3.8L21 10.6V48h6V10.6l17.1 16.7 3.8-3.8z"/></svg>`;
  return (
    <IconBase {...attributes} svgSource={svgString} > </IconBase>
  );
};

SvgIcon.displayName = "IconUp";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;

/* eslint-enable */
