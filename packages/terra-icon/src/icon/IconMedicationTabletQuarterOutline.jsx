/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M19.5,28.5v16.04c-7.78-1.7-14.34-8.25-16.04-16.04h16.04M22.5,25.5H.05c.52,11.76,10.69,21.93,22.45,22.45v-22.45h0Z" fill="#231f20" strokeWidth="0" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconMedicationTabletQuarterOutline";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","id":"a"};

export default SvgIcon;
/* eslint-enable */
