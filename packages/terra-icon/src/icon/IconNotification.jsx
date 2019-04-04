/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M40 31.5a8.48 8.48 0 0 1-2.1-4.7V17a13.81 13.81 0 0 0-9.6-13.2A4.25 4.25 0 0 0 24 0a4.42 4.42 0 0 0-4.4 3.7A14 14 0 0 0 10 16.9v9.8a7.91 7.91 0 0 1-2.6 4.7A10.45 10.45 0 0 0 4 38.7v.2h38.8v-.2a9.64 9.64 0 0 0-2.8-7.2zM18 42a6 6 0 0 0 12 0v-.2H18z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconNotification";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
/* eslint-enable */