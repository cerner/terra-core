/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M18.5 0a8.9 8.9 0 11-8.9 8.9A8.92 8.92 0 0118.5 0zm-5.6 29.2a1.6 1.6 0 11-1.6 1.6 1.58 1.58 0 011.6-1.6zM31 35.4a7.8 7.8 0 01-2.7-5.8 7.54 7.54 0 012-5.1 13.22 13.22 0 00-5.6-3.6v4.6a2.23 2.23 0 001 1.6 1.61 1.61 0 01.6 1.4v4.7a.8.8 0 01-1.6 0v-5.5h-1.6v5.5a.8.8 0 11-1.6 0v-4.8a2.16 2.16 0 01.6-1.4 2.23 2.23 0 001-1.6v-5a10.9 10.9 0 00-2.6-.3h-4.4a11.53 11.53 0 00-2.6.3v7.3a3.2 3.2 0 11-1.6 0v-6.9A13.5 13.5 0 003 33.5V38h24.1a11.6 11.6 0 013.9-2.6zM36 24a5.6 5.6 0 11-5.6 5.6A5.59 5.59 0 0136 24zm9.8 24v-2.8a8.45 8.45 0 00-8.4-8.4h-2.7a8.45 8.45 0 00-8.4 8.4V48z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconPersonnelPerson";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
/* eslint-enable */
