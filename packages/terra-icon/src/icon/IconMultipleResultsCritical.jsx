/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M41 2v44H12v2h31V2h-2z" ></path><path d="M39 0H8v44h31V0ZM26 40h-5v-5h5v5Zm0-9h-5V4h5v27Z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconMultipleResultsCritical";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
