/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M15 24.1v-3.7l12.2 12.2c-1 .4-2 .6-3.2.6-5-.1-9-4.1-9-9.1zm18 0V9c0-2.5-1-4.7-2.6-6.4C28.7 1 26.5 0 24 0c-5 0-9 4-9 9v.6l17.5 17.5c.3-.9.5-1.9.5-3zm-1.2 13l-2.2-2.2c-1.7.9-3.5 1.4-5.6 1.4-6.6 0-12-5.4-12-12V22H9v2.3c0 7.8 5.9 14.2 13.5 14.9V45H18v3h12v-3h-4.5v-5.8c2.3-.2 4.4-.9 6.3-2.1zM39 24.3V22h-3v2.3c0 1.8-.4 3.6-1.2 5.1l2.2 2.2c1.3-2.1 2-4.6 2-7.3zM5.9 3.8L3.8 5.9 42 44.1l2.1-2.1L5.9 3.8z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconMicrophoneDisabled";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */