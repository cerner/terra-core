/* eslint-disable */
import React from 'react';
import IconBaseDec from '../IconBaseDec';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBaseDec {...attributes}>
      <path d="M45.8 8H2.2C1 8 0 9 0 10.2v27.7C0 39 1 40 2.2 40h43.7c1.2 0 2.2-1 2.2-2.2V10.2C48 9 47 8 45.8 8zM3 37V14.6l21 15 21-15V37H3zm.1-26h41.7L24 25.9 3.1 11z" ></path>
    </IconBaseDec>
  );
};

SvgIcon.displayName = "IconEnvelopeDec";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
