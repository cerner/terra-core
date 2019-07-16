/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M47.4 43.2l-13-13A19.66 19.66 0 0038 19a19 19 0 10-7.9 15.4l13 13a2.05 2.05 0 002.9 0l1.4-1.4a1.93 1.93 0 000-2.8zM3 19a16 16 0 1116 16A16 16 0 013 19z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconSearch";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
/* eslint-enable */
