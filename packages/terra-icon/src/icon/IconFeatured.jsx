/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M.7 20.1a2.47 2.47 0 01-.7-1.5c0-.7.5-1.2 1.6-1.4L16.1 15l6.5-13.8C22.9.4 23.4 0 24 0s1 .4 1.4 1.2L31.9 15l14.5 2.2c1.1.2 1.6.6 1.6 1.4a2.75 2.75 0 01-.8 1.5L36.8 30.8l2.5 15.1v.6a2 2 0 01-.3 1.1 1 1 0 01-.9.4 1.92 1.92 0 01-1.2-.4l-13-7.1-13 7.1a2.84 2.84 0 01-1.2.4 1 1 0 01-.9-.4 2 2 0 01-.3-1.1 1.76 1.76 0 01.1-.6l2.5-15.1z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconFeatured";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
/* eslint-enable */
