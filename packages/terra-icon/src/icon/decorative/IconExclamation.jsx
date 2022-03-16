/* eslint-disable */
import React from 'react';
import IconBaseDec from '../../IconBaseDec';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBaseDec {...attributes}>
      <path d="M0 40h8v8H0v-8zM0 0h8v32H0V0z" ></path>
    </IconBaseDec>
  );
};

SvgIcon.displayName = "IconExclamationDec";
SvgIcon.defaultProps = {"viewBox":"0 0 8 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
