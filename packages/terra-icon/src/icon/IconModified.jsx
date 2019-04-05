/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M24 0L3 42l-3 6h48L24 0zm-1.7 10.1l16 31.9H6.4l15.9-31.9z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconModified";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
