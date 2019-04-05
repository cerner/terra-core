/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M36.9 42.7l-4 4.3-.3.3c-.7.6-1.6.8-2.5.6-1.1-.2-8.8-2-18.4-11.6C2.1 26.6.2 18.7.1 17.8c-.2-.8 0-1.7.6-2.4l.3-.3L5.4 11c.7-.7 1.9-.6 2.5.3l5.4 7.9c.4.5.4 1.2.1 1.8l-2.8 4.6c1.4 1.9 3.2 4.2 5.5 6.5s4.5 4.1 6.4 5.4l4.7-2.8c.5-.3 1.2-.3 1.8.1l7.9 5.4c.6.6.7 1.8 0 2.5zM48 16.5l-6.8-7.1v4.8h-4.5c-8.2 0-12.7 5.1-12.7 11.2v2.4c1-5 4.4-9.1 9.7-9.1h7.5v4.7l6.8-6.9z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconOutgoingCall";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
