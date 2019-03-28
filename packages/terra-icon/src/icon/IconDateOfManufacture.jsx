/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M34 0v26l-5.773-8-5.613 7.778L17 18l-5.613 7.778L5.773 18 0 26v22h48V0H34zm11 45H3V26.969l2.773-3.843 3.181 4.407 2.433 3.371 2.433-3.371L17 23.126l3.181 4.407 2.433 3.371 2.433-3.371 3.181-4.407 3.341 4.629L33.909 31H37V3h8v42z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconDateOfManufacture";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
