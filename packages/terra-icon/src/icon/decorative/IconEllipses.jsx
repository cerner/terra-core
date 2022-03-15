/* eslint-disable */
import React from 'react';
import IconBaseDec from '../IconBaseDec';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBaseDec {...attributes}>
      <path d="M24 18.6a5.4 5.4 0 11-5.4 5.4 5.38 5.38 0 015.4-5.4zm18.6 0a5.4 5.4 0 11-5.4 5.4 5.38 5.38 0 015.4-5.4zm-37.2 0A5.4 5.4 0 110 24a5.38 5.38 0 015.4-5.4z" ></path>
    </IconBaseDec>
  );
};

SvgIcon.displayName = "IconEllipsesDec";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
/* eslint-enable */
