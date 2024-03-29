/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M21 46.136a22.5 22.5 0 0 1 0-44.593z" ></path><path d="M19.5 3.328v41.023a21 21 0 0 1 0-41.023m3-3.437a24 24 0 0 0 0 47.9v-47.9z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconMedicationTabletHalf";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","data-name":"Layer 2","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
