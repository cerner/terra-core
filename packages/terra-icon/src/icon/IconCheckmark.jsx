/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M18.4 40.9L0 22.5l4.2-4.2 14.2 14.2L43.8 7.1l4.2 4.2z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconCheckmark";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
/* eslint-enable */