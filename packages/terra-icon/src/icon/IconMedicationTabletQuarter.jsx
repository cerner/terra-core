/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path fill="#231f20" d="M.05 25.5C.79 37.56 10.44 47.2 22.5 47.95V25.5H.05Z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconMedicationTabletQuarter";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
