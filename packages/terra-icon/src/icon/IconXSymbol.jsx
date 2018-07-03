/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M0 12L12 0l12 12L36 0l12 12-12 12 12 12-12 12-12-12-12 12L0 36l12-12L0 12z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconXSymbol";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
