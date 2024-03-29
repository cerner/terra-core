/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M32 29.4a1.72 1.72 0 1 1-2.4 2.4l-6.9-6.9a2.2 2.2 0 0 1-.6-1.9V11.4a1.9 1.9 0 0 1 1.7-2 1.9 1.9 0 0 1 1.7 2v11.5zM48 24a24 24 0 0 1-24 24 24 24 0 0 1 0-48 24.47 24.47 0 0 1 7.1 1.1A23.82 23.82 0 0 1 48 24zm-3 0A20.91 20.91 0 0 0 30.2 3.9 21.63 21.63 0 0 0 24 3a21 21 0 1 0 21 21z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconClock";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","data-name":"Layer 1","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
