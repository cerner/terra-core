/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M0 0h8v47.9H0V0zm14 0v48h34V0H14zm27 35.8L36.7 40 21 24 36.7 8l4.3 4.2L29.4 24 41 35.8z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconPanelLeft";
SvgIcon.defaultProps = {"className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","isBidi":true};

export default SvgIcon;
/* eslint-enable */
