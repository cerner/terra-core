/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M24.5.1l-3.8 3.8L37.4 21H0v6h37.4L20.7 44.1l3.8 3.8L48 24z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconRight";
SvgIcon.defaultProps = {"className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1","isBidi":true};

export default SvgIcon;
/* eslint-enable */
