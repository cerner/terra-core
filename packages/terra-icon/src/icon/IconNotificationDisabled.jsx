/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M33.5 38.9H4v-.2a10.45 10.45 0 013.4-7.3 7.91 7.91 0 002.6-4.7v-9.8c.003-.476.039-.945.089-1.411L33.5 38.9zM18 42a6 6 0 1012 0v-.2H18v.2zm1.6-38.3a13.974 13.974 0 00-6.271 4.229L42.75 37.35A9.634 9.634 0 0040 31.5a8.48 8.48 0 01-2.1-4.7V17a13.81 13.81 0 00-9.6-13.2A4.25 4.25 0 0024 0a4.42 4.42 0 00-4.4 3.7zM44.1 42L42 44.1 3.8 5.9l2.1-2.1L44.1 42z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconNotificationDisabled";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
