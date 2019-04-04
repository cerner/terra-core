/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M24 0C10.7 0 0 10.7 0 24c0 4.1 1 8 2.9 11.4C7 42.9 14.9 48 24 48s17-5.1 21.1-12.6C47 32 48 28.1 48 24 48 10.7 37.3 0 24 0zM2 24C2 11.9 11.9 2 24 2s22 9.9 22 22H2z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconPartiallyMet";
SvgIcon.defaultProps = {"className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","isBidi":true};

export default SvgIcon;
/* eslint-enable */