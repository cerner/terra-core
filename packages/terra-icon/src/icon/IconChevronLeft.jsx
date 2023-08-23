/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconChevronLeft";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","data-name":"Layer 1","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
