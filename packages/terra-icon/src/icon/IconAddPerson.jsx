/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M48 34H38V24h-4v10H24v4h10v10h4V38h10zM19.7-.1A8.7 8.7 0 1 1 11 8.6a8.71 8.71 0 0 1 8.7-8.7zM22 32h10v-7.4a12.84 12.84 0 0 0-10.2-5h-4.2A12.93 12.93 0 0 0 4.7 32.5v4.4H22z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconAddPerson";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
/* eslint-enable */
