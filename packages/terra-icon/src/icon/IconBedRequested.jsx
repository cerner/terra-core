/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M42 26H6V11c0-1.7-1.3-3-3-3s-3 1.3-3 3v29h6v-8h36v8h6V26h-6z" ></path><path d="M39 14H21v9h27c0-5-4-9-9-9z" ></path><circle cx="13.5" cy="18.5" r="4.5" ></circle>
    </IconBase>
  );
};

SvgIcon.displayName = "IconBedRequested";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */