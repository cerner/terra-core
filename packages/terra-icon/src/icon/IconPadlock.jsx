/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M38.8 20H35v-9a11 11 0 0 0-22 0v9H9.2A2.22 2.22 0 0 0 7 22.2v23.7A2.2 2.2 0 0 0 9.2 48h29.7a2.22 2.22 0 0 0 2.2-2.2V22.2a2.38 2.38 0 0 0-2.3-2.2zM26 33.5V40h-4v-6.5a3.26 3.26 0 0 1-1-2.3 3 3 0 0 1 3-3 3.08 3.08 0 0 1 3 3 3.26 3.26 0 0 1-1 2.3zm6-14.9V20H16v-9a8 8 0 0 1 16 0z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconPadlock";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
/* eslint-enable */