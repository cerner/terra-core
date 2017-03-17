/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M36 11V0H12v11H5v37h16V36h6v12h16V11zM15 41h-4v-5h4zm0-12h-4v-5h4zm11 0h-4v-5h4zm5-15h-5v5h-4v-5h-5v-4h5V5h4v5h5zm6 27h-4v-5h4zm0-12h-4v-5h4z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconHospital";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
/* eslint-enable */
