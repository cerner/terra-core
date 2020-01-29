/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M19 17.9c-4.1 0-7.8 1.7-10.5 4.3l-3.1-3.1c3.5-3.5 8.3-5.6 13.6-5.6s10.1 2.1 13.6 5.6L29.7 22c-.1 0-.1.1-.2.1-2.8-2.6-6.4-4.2-10.5-4.2zm15.7-.9l3.3-3.3C33.1 9 26.4 6 19 6S4.9 9 0 13.7L3.3 17c4-4 9.6-6.5 15.7-6.5S30.7 13 34.7 17zM21.2 28.9c-.7-.4-1.4-.6-2.2-.6-1.2 0-2.3.5-3.1 1.3l3.1 3.1 1.1-1.1c.3-.9.7-1.8 1.1-2.7zm1.8-2.4c1-1.1 2.2-2.1 3.5-2.9-2-1.6-4.6-2.6-7.4-2.6-3.2 0-6.2 1.3-8.4 3.4l3.1 3.1c1.3-1.3 3.2-2.2 5.2-2.2 1.5 0 2.8.4 4 1.2zM34 24c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zm-9 12c0-5 4-9 9-9 1.9 0 3.7.6 5.2 1.7L26.7 41.2C25.6 39.7 25 37.9 25 36zm9 9c-1.9 0-3.7-.6-5.2-1.7l12.5-12.5c1 1.5 1.7 3.3 1.7 5.2 0 5-4 9-9 9z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconNoSignal";
SvgIcon.defaultProps = {"className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","isBidi":true};

export default SvgIcon;
/* eslint-enable */
