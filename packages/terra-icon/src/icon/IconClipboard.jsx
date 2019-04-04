/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M34 20v3H14v-3h20zm0 8H14v3h20v-3zm0 8H14v3h20v-3zm8-28v38c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h5l1.1-1.4C16.6 1.7 20.2 0 24 0s7.4 1.7 9.8 4.6L35 6h5c1.1 0 2 .9 2 2zM22.3 4.7c0 .5.3 1 .7 1.3h2c.4-.3.7-.8.7-1.3 0-1-.8-1.7-1.7-1.7s-1.7.7-1.7 1.7zM39 9h-3v3c0 1.1-.9 2-2 2H14c-1.1 0-2-.9-2-2V9H9v36h30V9z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconClipboard";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */