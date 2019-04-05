/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M29.8 35l2.4 2.4c-2.6.8-5.4 1.3-8.3 1.3-10.5 0-19.5-6-24-14.7C2 20 5 16.5 8.7 14l2.1 2.2c-3 2-5.6 4.6-7.5 7.9 4.3 7.3 12 11.7 20.6 11.7 2.1-.1 4.1-.3 5.9-.8zM24 12.3c8.5 0 16.3 4.5 20.6 11.7-1.9 3.2-4.5 5.9-7.5 7.9l2.1 2.1c3.7-2.5 6.8-6 8.8-10-4.5-8.7-13.5-14.7-24-14.7-2.9 0-5.7.5-8.3 1.3l2.4 2.4c1.9-.5 3.9-.7 5.9-.7zm3.3 20.2L15.5 20.7c-.4 1-.6 2.2-.6 3.3 0 5 4.1 9.1 9.1 9.1 1.2 0 2.3-.2 3.3-.6zm-6.6-17l11.8 11.8c.4-1 .6-2.2.6-3.3 0-5-4.1-9.1-9.1-9.1-1.2 0-2.3.2-3.3.6zM3.8 5.9L42 44.1l2.1-2.1L5.9 3.8 3.8 5.9z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconUnread";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
