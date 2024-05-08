/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path fill="#231f20" d="M19.5 28.5v16.04c-7.78-1.7-14.34-8.25-16.04-16.04H19.5m3-3H.05C.57 37.26 10.74 47.43 22.5 47.95V25.5Z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconMedicationTabletQuarterOutline";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
