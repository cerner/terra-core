/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="is-bidi"><path d="M0 36l24-24 24 24H0z"/></svg>`;
  return (
    <IconBase {...attributes} svgSource={svgString} > </IconBase>
  );
};

SvgIcon.displayName = "IconCaretUp";
SvgIcon.defaultProps = {"className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","isBidi":true};

export default SvgIcon;

/* eslint-enable */
