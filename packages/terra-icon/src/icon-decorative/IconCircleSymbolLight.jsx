/* eslint-disable */
import React from 'react';
import IconBaseDec from '../IconBaseDec';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBaseDec {...attributes}>
      <circle cx="24" cy="24" r="21" fill="#FFF" ></circle><path d="M24.1 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24C48 10.8 37.3 0 24.1 0zM24 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21z" ></path>
    </IconBaseDec>
  );
};

SvgIcon.displayName = "IconCircleSymbolLightDec";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
