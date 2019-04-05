/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M24 48C10.7 48 0 37.3 0 24S10.7 0 24 0s24 10.7 24 24-10.7 24-24 24z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconCircleSymbol";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
