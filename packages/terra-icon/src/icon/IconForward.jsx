/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M34 34.4V25H20c-10.6.1-17.9 8-20 18v-4.8C0 25.9 8.5 16 25 16h9V6.4l14 14z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconForward";
SvgIcon.defaultProps = {"className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1","isBidi":true};

export default SvgIcon;
/* eslint-enable */
