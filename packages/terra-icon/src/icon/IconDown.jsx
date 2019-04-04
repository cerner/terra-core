/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M47.9 24.5l-3.8-3.8L27 37.4V0h-6v37.4L3.9 20.7.1 24.5 24 48z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconDown";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
/* eslint-enable */