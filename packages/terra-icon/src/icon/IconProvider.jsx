/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M17 37a2 2 0 1 1-2 2 2 2 0 0 1 2-2zm13-5.1zm2-4.2v4.5a2.86 2.86 0 0 0 1.2 2.1A2 2 0 0 1 34 36v6a1 1 0 0 1-2 0v-7h-2v7a1 1 0 0 1-2 0v-6a2 2 0 0 1 .8-1.7 2.86 2.86 0 0 0 1.2-2.1V27a20.45 20.45 0 0 0-12 0v8.1a4 4 0 1 1-5 3.9 4.08 4.08 0 0 1 3-3.9v-7.4A20.37 20.37 0 0 0 3.7 46.4V48h40.6v-1.6A20.37 20.37 0 0 0 32 27.7zM24 0a11.44 11.44 0 0 1 11.5 11.5 11.5 11.5 0 0 1-23 0A11.44 11.44 0 0 1 24 0z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconProvider";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
/* eslint-enable */