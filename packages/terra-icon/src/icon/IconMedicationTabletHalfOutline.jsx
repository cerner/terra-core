/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M19.5 3.488v41.024a21 21 0 010-41.024m3-3.437a24 24 0 000 47.9V.051z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconMedicationTabletHalfOutline";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 2"};

export default SvgIcon;
/* eslint-enable */
