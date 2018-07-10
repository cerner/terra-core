/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M24 48s-4.8-5.9-14.5-17.6c-6.4-8.1-5.1-19.9 2.9-26.3s19.6-5.1 26 3c5.4 6.8 5.4 16.5 0 23.4C28.8 42.1 24 48 24 48z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconTeardropUpSymbol";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
