/* eslint-disable */
import React from 'react';
import IconBaseDec from '../IconBaseDec';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBaseDec {...attributes}>
      <path d="M21 43H5V5h21V0H0v48h26v-5zm23-18h-5v-4a2 2 0 00-.91-1.674l-.533-.467a7.994 7.994 0 01-6.289-5.833A2.009 2.009 0 0031 13H18.672l-4.086 4.086a2 2 0 102.779 2.877l.049-.049L20.328 17h6.253L15.319 27.819l-2.37-2.529A2.5 2.5 0 009.3 28.71l5.833 6.221 6.893-6.622L29 35.015V40.5a2.5 2.5 0 005 0v-7.614l-4.6-4.424 5.6-5.7V29h9a2 2 0 000-4zM39 6a5 5 0 11-5 5 5 5 0 015-5z" ></path>
    </IconBaseDec>
  );
};

SvgIcon.displayName = "IconPersonDoorDec";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 3"};

export default SvgIcon;
/* eslint-enable */
