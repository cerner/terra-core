/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M48 12H0V5.1A5.12 5.12 0 0 1 5.1 0H43a5.1 5.1 0 0 1 5 5.1zM3 15v30.5A2.48 2.48 0 0 0 5.5 48h37a2.48 2.48 0 0 0 2.5-2.5V15zm29 8H17v-4h15z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconArchive";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
/* eslint-enable */