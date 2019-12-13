/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M21 43h3v5H0V0h24v5H5v38h16zm16.6-28.9c2.5 0 4.6-2.1 4.6-4.6s-2.1-4.6-4.6-4.6c-2.6 0-4.6 2-4.6 4.6s2 4.6 4.6 4.6zm4.1 8.4l-3.8-.1-2.7-3.5c-.7-1.5-1.7-2.8-2.9-4-1.1-1.2-2.5-2.2-4-2.9H16.2L12 16.2c-.9.9-.9 2.3 0 3.1.9.9 2.3.9 3.1 0l3.1-3.1H24L12.4 27.9l-2-2c-.9-.9-2.3-.9-3.1 0-.9.9-.9 2.3 0 3.1l4.9 5 1.4-1.4 6-6 9.1 9.1v4.4c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-5.9l-6.6-6.6 6.1-6.1 4.2 5.1h4.9c1.1 0 2.1-.9 2.1-2.1 0-1.1-.9-2-2.1-2z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconPersonDoor";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
