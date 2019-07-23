/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M47 22.5L25.4.6a2.05 2.05 0 00-2.9 0L1 22.5c-.8.8-.6 1.5.6 1.5H6v22a2 2 0 002 2h8a2 2 0 002-2V35a2 2 0 012-2h8a2 2 0 012 2v11a2 2 0 002 2h8a2 2 0 002-2V24h4.4c1.2 0 1.4-.7.6-1.5z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconHouse";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
/* eslint-enable */
