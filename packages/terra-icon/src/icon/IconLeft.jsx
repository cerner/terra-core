/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M48 21H10.6L27.3 3.9 23.5.1 0 24l23.5 23.9 3.8-3.8L10.6 27H48z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconLeft";
SvgIcon.defaultProps = {"className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1","isBidi":true};

export default SvgIcon;
/* eslint-enable */