/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path fill="#868A8C" d="M21.5 32.7h5V38h-5v-5.3zm0-22.7v17.3h5V10h-5zM24 1c12.7 0 23 10.3 23 23S36.7 47 24 47 1 36.7 1 24 11.3 1 24 1m0-1C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconUnspecified";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
