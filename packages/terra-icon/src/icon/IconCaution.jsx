/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M22 35h4v4h-4v-4zm0-18h4v15h-4V17zm2-7.805l18.807 32.616H5.193L24 9.195m0-6.006L0 44.811h48L24 3.189z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconCaution";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
