/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="m24 10.3 24 23.5-3.8 3.9L24 18 3.8 37.7 0 33.8z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconChevronUp";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","data-name":"Layer 1","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
