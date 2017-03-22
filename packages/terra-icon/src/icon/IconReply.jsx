/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M0 20.4l14-14V16h9c16.5 0 25 9.9 25 22.2V43c-2.1-10-9.4-17.9-20-18H14v9.4z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconReply";
SvgIcon.defaultProps = {"className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1","isBidi":true};

export default SvgIcon;
/* eslint-enable */
