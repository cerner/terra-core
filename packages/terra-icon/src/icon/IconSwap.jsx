/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M48 15H11.9v8.5L0 12 11.9.5V9H48v6zm0 21L36.1 24.5V33H0v6h36.1v8.5L48 36z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconSwap";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
