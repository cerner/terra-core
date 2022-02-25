/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 48"><path d="M0 40h8v8H0v-8zM0 0h8v32H0V0z"/></svg>`;
  return (
    <IconBase {...attributes} encoding="utf8" svgSource={svgString} ></IconBase>
  );
};

SvgIcon.displayName = "IconExclamation";
SvgIcon.defaultProps = {"viewBox":"0 0 8 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;

/* eslint-enable */
