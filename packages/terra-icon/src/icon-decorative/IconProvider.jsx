/* eslint-disable */
import React from 'react';
import IconBaseDec from '../IconBaseDec';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBaseDec {...attributes}>
      <path d="M17 37a2 2 0 11-2 2 2 2 0 012-2zm13-5.1zm2-4.2v4.5a2.86 2.86 0 001.2 2.1A2 2 0 0134 36v6a1 1 0 01-2 0v-7h-2v7a1 1 0 01-2 0v-6a2 2 0 01.8-1.7 2.86 2.86 0 001.2-2.1V27a20.45 20.45 0 00-12 0v8.1a4 4 0 11-5 3.9 4.08 4.08 0 013-3.9v-7.4A20.37 20.37 0 003.7 46.4V48h40.6v-1.6A20.37 20.37 0 0032 27.7zM24 0a11.44 11.44 0 0111.5 11.5 11.5 11.5 0 01-23 0A11.44 11.44 0 0124 0z" ></path>
    </IconBaseDec>
  );
};

SvgIcon.displayName = "IconProviderDec";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
/* eslint-enable */
