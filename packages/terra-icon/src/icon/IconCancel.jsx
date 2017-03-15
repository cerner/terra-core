/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M24 0a24 24 0 1 0 24 24A23.94 23.94 0 0 0 24 0zM5.5 24A18.52 18.52 0 0 1 24 5.5a18.05 18.05 0 0 1 10.9 3.6L9.2 35a18.43 18.43 0 0 1-3.7-11zM24 42.5a18.05 18.05 0 0 1-10.9-3.6L38.8 13A18.42 18.42 0 0 1 24 42.5z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconCancel";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
/* eslint-enable */
