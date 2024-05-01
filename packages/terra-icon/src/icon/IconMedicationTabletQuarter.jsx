/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M.05,25.5c.74,12.06,10.39,21.7,22.45,22.45v-22.45H.05Z" fill="#231f20" strokeWidth="0" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconMedicationTabletQuarterFill";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","id":"a"};

export default SvgIcon;
/* eslint-enable */
