/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M42 24v18H6V24H0v24h48V24zm-3.9-9.9L24 0 9.9 14.1l3.7 3.7 7.4-7.4V35h6V10.4l7.4 7.4z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconUpload";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
/* eslint-enable */