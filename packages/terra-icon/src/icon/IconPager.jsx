/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M44.47 8H3.53A3.529 3.529 0 0 0 0 11.53v24.94A3.529 3.529 0 0 0 3.53 40h40.94A3.529 3.529 0 0 0 48 36.47V11.53A3.529 3.529 0 0 0 44.47 8zM6.5 33A2.5 2.5 0 1 1 9 30.5 2.5 2.5 0 0 1 6.5 33zm8 0a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1-2.5 2.5zm17 0h-9a2.5 2.5 0 0 1 0-5h9a2.5 2.5 0 0 1 0 5zM44 24H4V12h40z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconPager";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","data-name":"Layer 4 copy 2","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
