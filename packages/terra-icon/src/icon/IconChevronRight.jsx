/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const svgString = `<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="is-bidi"><path d="M37.7 24L14.2 48l-3.9-3.8L30 24 10.3 3.8 14.2 0z"/></svg>`;
  return (
    <IconBase {...attributes} svgSource={svgString} > </IconBase>
  );
};

SvgIcon.displayName = "IconChevronRight";
SvgIcon.defaultProps = {"className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1","isBidi":true};

export default SvgIcon;

/* eslint-enable */
