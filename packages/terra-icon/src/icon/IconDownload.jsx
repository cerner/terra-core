/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M42 24v18H6V24H0v24h48V24zM9.9 20.9L24 35l14.1-14.1-3.7-3.7-7.4 7.4V0h-6v24.6l-7.4-7.4z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconDownload";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
/* eslint-enable */
