/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M17.7 26.1L6.9 36.9 0 30v18h18l-6.9-6.9 10.8-10.8zM48 0H30l6.9 6.9-10.8 10.8 4.2 4.2 10.8-10.8L48 18z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconMaximize";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
/* eslint-enable */