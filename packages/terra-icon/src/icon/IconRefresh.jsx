/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M48 23.8l-8.1-8-8 8h5.9v.3a13.72 13.72 0 0 1-13.7 13.7 18.59 18.59 0 0 1-3.3-.4l-3.9 3.9a17.07 17.07 0 0 0 7.1 1.5 18.67 18.67 0 0 0 18.7-18.7v-.3zM23.9 10.2a18.59 18.59 0 0 1 3.3.4l3.9-3.9A16.74 16.74 0 0 0 24 5.2 18.67 18.67 0 0 0 5.3 23.9H0L8.1 32l8-8.1h-5.9a13.72 13.72 0 0 1 13.7-13.7z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconRefresh";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
/* eslint-enable */