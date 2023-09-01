/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M37.7 24 14.2 48l-3.9-3.8L30 24 10.3 3.8 14.2 0z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconChevronRight";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","data-name":"Layer 1","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
