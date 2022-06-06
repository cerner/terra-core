/* eslint-disable */
import React from 'react';
import IconBaseDec from '../../IconBaseDec';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBaseDec {...attributes} >
      <path d="M.1 48l5.7-12.8 7.1 7.1zm44.8-37.6l2.5-2.5a2.05 2.05 0 000-2.9L43 .6a2.05 2.05 0 00-2.9 0l-2.5 2.5zm-9.4-5.2L7.6 33.1l7.3 7.3 27.9-27.9z" ></path>
    </IconBaseDec>
  );
};

SvgIcon.displayName = "IconEditDec";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
/* eslint-enable */
