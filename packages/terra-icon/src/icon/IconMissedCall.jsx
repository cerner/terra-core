/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M43 33.5l-.2 5c0 .8-.8 1.5-1.6 1.3l-7.9-1.4c-.5-.1-.9-.5-1.1-1L31.1 33c-2-.3-4.4-.6-7.2-.6s-5.1.2-7 .6l-1.1 4.4c-.1.5-.6.9-1.1 1l-7.9 1.4c-.8.2-1.6-.4-1.6-1.2l-.2-5v-.4c.1-.8.5-1.4 1.1-1.8.8-.5 6.4-4 17.8-4 11.6 0 17.4 3.7 18 4.1.6.4 1 1 1.1 1.8v.2zM16.1 14.1l9 9L37 11.3l-2-2-9.8 9.8-7-7 .5-.5 3.5-3.5H12v10.1l3.4-3.4.7-.7z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconMissedCall";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
