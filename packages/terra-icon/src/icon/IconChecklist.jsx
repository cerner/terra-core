/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M21 14h27v3H21zM7.2 21.8L0 14.6l2.1-2.1 5.1 5 9.2-9.3 2.1 2.2zM21 32h27v3H21zM7.2 39.8L0 32.6l2.1-2.1 5.1 5 9.2-9.3 2.1 2.2z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconChecklist";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
/* eslint-enable */
