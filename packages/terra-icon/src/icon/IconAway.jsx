/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M31.1 1.1C28.8.4 26.4 0 24 0 10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24c0-10.5-6.8-19.8-16.9-22.9z" ></path><path fill="#FFF" d="M32.4 31.8c-.6.8-1.6.9-2.4.4-.2-.1-.3-.2-.4-.4l-6.9-6.9c-.5-.5-.7-1.2-.6-1.9V11.4c-.1-1 .7-1.9 1.7-2 1 .1 1.8 1 1.7 2v11.5l6.5 6.5c.8.6.9 1.6.4 2.4z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconAway";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
