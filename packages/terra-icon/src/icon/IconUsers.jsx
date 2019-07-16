/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M15 0a8.7 8.7 0 11-8.7 8.7A8.71 8.71 0 0115 0zm18 11a8.7 8.7 0 11-8.7 8.7A8.71 8.71 0 0133 11zm15 37v-4.4a12.93 12.93 0 00-12.9-12.9h-4.2A12.93 12.93 0 0018 43.6V48zM25.5 28.7a11.32 11.32 0 01-4.1-8.3 14.21 14.21 0 00-4.2-.7H13A13 13 0 000 32.6V37h16.4a15.52 15.52 0 019.1-8.3z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconUsers";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
/* eslint-enable */
