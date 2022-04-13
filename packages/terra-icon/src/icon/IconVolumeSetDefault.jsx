/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M28.955.1v47.8L15.013 33.958H.075V14.041h14.938z" data-name="256" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconVolumeSetDefault";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
