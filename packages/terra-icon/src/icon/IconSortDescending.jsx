/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M14 0H8v37H0l11 11 11-11h-8zm11 8h23v6H25zm5 13h18v6H30zm5 13h13v6H35z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconSortDescending";
SvgIcon.defaultProps = {"className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1","isBidi":true};

export default SvgIcon;
/* eslint-enable */