/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M24.5 33l-4.9-4.9c-2.5.8-4.7 2.1-6.5 4L17 36c1.8-1.8 4.2-3 7-3h.5zm-.5 3.6c-1.8 0-3.4.8-4.5 2L24 43l4.5-4.5c-1.1-1.2-2.7-1.9-4.5-1.9zM12.7 21.2c-2.2 1.2-4.2 2.7-6 4.5l3.9 3.9c1.8-1.8 3.9-3.2 6.2-4.2l-4.1-4.2zm-6.6-6.6C4 16 2 17.5.3 19.3l3.9 3.9c1.7-1.8 3.7-3.3 5.9-4.6l-4-4zM3.8 8.1L37 41.3l2.1-2.1L6 6 3.8 8.1zM24 9.4c-3.2 0-6.2.5-9.2 1.3l4.6 4.6c1.5-.2 3-.4 4.6-.4 7.7 0 14.8 3.2 19.8 8.3l3.9-3.9c-6-6.1-14.4-9.9-23.7-9.9zm-1.3 9.1l6.1 6.1c3.3.9 6.3 2.7 8.7 5.1l3.9-3.9c-4.4-4.5-10.5-7.3-17.3-7.3-.6-.1-1-.1-1.4 0z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconWifiSlash";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
