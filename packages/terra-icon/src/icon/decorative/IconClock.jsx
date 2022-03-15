/* eslint-disable */
import React from 'react';
import IconBaseDec from '../../IconBaseDec';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBaseDec {...attributes}>
      <path d="M32 29.4a1.72 1.72 0 11-2.4 2.4l-6.9-6.9a2.2 2.2 0 01-.6-1.9V11.4a1.9 1.9 0 011.7-2 1.9 1.9 0 011.7 2v11.5zM48 24a24 24 0 01-24 24 24 24 0 010-48 24.47 24.47 0 017.1 1.1A23.82 23.82 0 0148 24zm-3 0A20.91 20.91 0 0030.2 3.9 21.63 21.63 0 0024 3a21 21 0 1021 21z" ></path>
    </IconBaseDec>
  );
};

SvgIcon.displayName = "IconClockDec";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
/* eslint-enable */
