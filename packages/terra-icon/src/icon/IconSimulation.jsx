/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M46 2H2C.9 2 0 2.9 0 4v32c0 1.1.9 2 2 2h19v5h-5v3h16v-3h-5v-5h19c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM24 34.5c-1.2 0-2.2-1-2.2-2.2 0-1.2 1-2.2 2.2-2.2s2.2 1 2.2 2.2c0 1.2-1 2.2-2.2 2.2zM45 27H3V5h42v22z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconSimulation";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
