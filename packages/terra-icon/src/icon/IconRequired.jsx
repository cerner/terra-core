/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M46 15.1l-2.7-5.5-16.5 9.6V0h-5.5v19.2L4.8 9.6l-2.7 5.5L17.8 24 2 32.9l2.7 5.5 16.5-9.6V48h5.5V28.8l16.5 9.6 2.7-5.5L30.2 24 46 15.1z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconRequired";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */