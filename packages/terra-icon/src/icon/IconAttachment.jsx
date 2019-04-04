/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M32 8v29a8 8 0 0 1-16 0V8a5 5 0 0 1 10 0v29a2 2 0 0 1-4 0V15h-3v22a5 5 0 0 0 10 0V8a8 8 0 0 0-16 0v29a11 11 0 0 0 22 0V8z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconAttachment";
SvgIcon.defaultProps = {"className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1","isBidi":true};

export default SvgIcon;
/* eslint-enable */