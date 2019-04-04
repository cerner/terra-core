/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M46 2.1H2a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h31.2L45 45.9V34.1h1a2 2 0 0 0 2-2v-28a2 2 0 0 0-2-2z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconComment";
SvgIcon.defaultProps = {"className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1","isBidi":true};

export default SvgIcon;
/* eslint-enable */