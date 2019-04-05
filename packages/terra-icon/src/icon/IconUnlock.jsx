/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M37 0a11 11 0 0 0-11 11v9H3.2A2.22 2.22 0 0 0 1 22.2v23.7A2.2 2.2 0 0 0 3.2 48h29.7a2.22 2.22 0 0 0 2.2-2.2V22.2a2.22 2.22 0 0 0-2.2-2.2H29v-9a8 8 0 0 1 16 0v12h3V11A11 11 0 0 0 37 0zM20 33.5V40h-4v-6.5a3.26 3.26 0 0 1-1-2.3 3 3 0 0 1 3-3 3.08 3.08 0 0 1 3 3 3.26 3.26 0 0 1-1 2.3z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconUnlock";
SvgIcon.defaultProps = {"className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1","isBidi":true};

export default SvgIcon;
/* eslint-enable */
