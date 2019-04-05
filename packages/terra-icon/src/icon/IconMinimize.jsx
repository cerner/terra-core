/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M10.8 32.9L0 43.7 4.2 48l10.9-10.8 6.9 6.9V26H3.9zM48 4.2L43.8 0 32.9 10.8 26 3.9V22h18.1l-6.9-6.9z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconMinimize";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
/* eslint-enable */
