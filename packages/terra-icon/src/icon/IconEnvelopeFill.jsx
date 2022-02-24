/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M.4 9c.4-.6 1.1-1 1.8-1h43.6c.8 0 1.4.4 1.9 1L24 25.9.4 9zM24 29.6L0 12.4v25.5C0 39 1 40 2.2 40h43.7c1.2 0 2.2-1 2.2-2.2V12.4L24 29.6z"/></svg>`;
  return (
    <IconBase {...attributes} svgSource={svgString} > </IconBase>
  );
};

SvgIcon.displayName = "IconEnvelopeFill";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;

/* eslint-enable */
