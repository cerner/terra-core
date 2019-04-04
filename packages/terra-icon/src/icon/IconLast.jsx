/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M31.8 24L8.4 48l-3.9-3.9L24.2 24 4.5 3.9 8.4.1zM37 0h6v48h-6z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconLast";
SvgIcon.defaultProps = {"className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1","isBidi":true};

export default SvgIcon;
/* eslint-enable */