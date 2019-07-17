/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M24 16.9a9.2 9.2 0 109.2 9.2 9.18 9.18 0 00-9.2-9.2zM42 9h-6l-4.9-4H16.9L12 9H6c-2.7 0-6 3.3-6 6v22a6.45 6.45 0 006 6h36a6.37 6.37 0 006-6V15c0-2.6-3.3-6-6-6zM8 19a3 3 0 010-6 3 3 0 010 6zm16 20a13 13 0 1113-13 13 13 0 01-13 13z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconCamera";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
/* eslint-enable */
