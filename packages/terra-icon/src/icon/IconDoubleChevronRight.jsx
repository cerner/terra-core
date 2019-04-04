/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M48 23.9l-23.4 24-3.9-3.9 19.7-20.1L20.7 3.8 24.6 0 48 23.9zm-20.7 0l-23.4 24L0 44l19.7-20.1L0 3.8 3.9 0l23.4 23.9z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconDoubleChevronRight";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */