/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <circle cx="24" cy="24" r="24" ></circle><path fill="#FFF" d="m28.2 24 9.7-9.8-2.1-2.1-1.2-1.2-1-.9-9.6 9.7-9.6-9.7-2.2 2.1-1.1 1.1-1 1 9.7 9.8-9.7 9.8 1 1 1.1 1.1 2.2 2.1 9.6-9.7 9.6 9.7 1-.9 1.2-1.2 2.1-2.1z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconIncomplete";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
