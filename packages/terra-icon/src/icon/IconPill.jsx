/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M44.7 3.2C42.6 1.1 39.8 0 37 0s-5.7 1.1-7.8 3.3l-26 26c-4.3 4.3-4.2 11.3.1 15.6 2.1 2 4.9 3.1 7.7 3.1s5.7-1.1 7.8-3.3l26-26c4.3-4.3 4.3-11.3-.1-15.5zm-2 13.4l-13 13-11.4-11.2 13-13C32.8 3.8 34.8 3 37 3c2.1 0 4.1.8 5.6 2.3S45 8.8 45 11c0 2.1-.8 4.1-2.3 5.6z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconPill";
SvgIcon.defaultProps = {"className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","isBidi":true};

export default SvgIcon;
/* eslint-enable */