/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M18.4 40.9 0 22.5l4.2-4.2 14.2 14.2L43.8 7.1l4.2 4.2z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconCommit";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","data-name":"Layer 1","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
