/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M5 20.4l14-14V16h4c16.5 0 25 9.9 25 22.2V43c-2.1-10-9.4-17.9-20-18h-9v9.4l-14-14zm11.1 13.2L2.8 20.3 16.1 7l-1.4-1.4L0 20.3 14.7 35l1.4-1.4z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconReplyAll";
SvgIcon.defaultProps = {"className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","isBidi":true};

export default SvgIcon;
/* eslint-enable */
