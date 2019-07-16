/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M31.1 31.4a1.51 1.51 0 11-2.1 2.1l-6.1-6.1a3 3 0 01-.5-.7.31.31 0 00-.1-.2c0-.1-.1-.3-.1-.4V15.3a1.69 1.69 0 011.5-1.8 1.69 1.69 0 011.5 1.8v10.3zm14.3-4.8a21.26 21.26 0 01-4.6 13.3A21.42 21.42 0 1120.9 5.4V2a2 2 0 012-2h2a2 2 0 012 2v3.4a18.63 18.63 0 013.4.7 24.25 24.25 0 016.4 3.3l2.2-2.2a2.05 2.05 0 012.9 0l1.4 1.4a2.05 2.05 0 010 2.9l-2.1 2.1a22 22 0 014.3 13zm-3 0A18.34 18.34 0 0029.5 9a20.32 20.32 0 00-5.5-.8A18.4 18.4 0 1038.4 38a18.16 18.16 0 004-11.4z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconDue";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
/* eslint-enable */
