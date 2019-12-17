/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path fill="#FFF" d="M33.9 26.1l9.9 9.9-7.8 7.8-9.9-9.9-2.1-2.1-2.1 2.1-9.9 9.9L4.2 36l9.9-9.9 2.1-2.1-2.1-2.1L4.2 12 12 4.2l9.9 9.9 2.1 2.1 2.1-2.1L36 4.2l7.8 7.8-9.9 9.9-2.1 2.1z" ></path><path d="M48 12L36 0 24 12 12 0 0 12l12 12L0 36l12 12 12-12 12 12 12-12-12-12 12-12zM36 43.8l-9.9-9.9-2.1-2.1-2.1 2.1-9.9 9.9L4.2 36l9.9-9.9 2.1-2.1-2.1-2.1L4.2 12 12 4.2l9.9 9.9 2.1 2.1 2.1-2.1L36 4.2l7.8 7.8-9.9 9.9-2.1 2.1 2.1 2.1 9.9 9.9-7.8 7.8z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconXSymbolLight";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
