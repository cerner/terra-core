/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M2.4 31.9l10-1.8c.7-.1 1.2-.6 1.4-1.3l1.4-5.6c2.4-.4 5.4-.7 8.9-.7s6.6.3 9 .8l1.5 5.5c.2.6.7 1.2 1.4 1.3l9.7 1.8c1.1.1 2-.6 2-1.7l.2-6.3v-.5c-.1-.9-.6-1.8-1.4-2.2-.8-.5-8.1-5.1-22.6-5.1-14.4 0-21.5 4.4-22.5 5.1-.8.5-1.3 1.3-1.5 2.3 0 0-.1.4 0 .5l.2 6.2c.3 1.1 1.3 1.8 2.3 1.7z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconPhoneDown";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */