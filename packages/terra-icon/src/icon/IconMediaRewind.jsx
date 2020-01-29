/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M43 6.72L26 20.246V6.72L4.282 24 26 41.28V27.754L43 41.28V6.72z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconMediaRewind";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
/* eslint-enable */
