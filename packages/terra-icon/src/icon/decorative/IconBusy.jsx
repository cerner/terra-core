/* eslint-disable */
import React from 'react';
import IconBaseDec from '../../IconBaseDec';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBaseDec {...attributes} >
      <path d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24C48 10.8 37.3 0 24.1 0H24z" ></path>
    </IconBaseDec>
  );
};

SvgIcon.displayName = "IconBusyDec";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
