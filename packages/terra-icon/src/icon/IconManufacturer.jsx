/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M34 0v26l-5.773-8-5.614 7.778L17 18l-5.613 7.778L5.773 18 0 26v22h48V0z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconManufacturer";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
