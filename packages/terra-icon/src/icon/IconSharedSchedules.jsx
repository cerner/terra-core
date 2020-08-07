/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <circle cx="40.99" cy="23.159" r="4.184" ></circle><path d="M22.74 35H6V17h27v4.415a8.547 8.547 0 01.928.451A7.181 7.181 0 0136 18.005V5h-4V1.763A1.768 1.768 0 0030.237 0h-1.474A1.768 1.768 0 0027 1.763V5H12V1.763A1.768 1.768 0 0010.237 0H8.763A1.768 1.768 0 007 1.763V5H3v33h16.291a11.473 11.473 0 013.449-3z" ></path><circle cx="29.695" cy="29.391" r="5.641" ></circle><path d="M39.449 47.75V44.9a8.38 8.38 0 00-8.38-8.379h-2.748a8.379 8.379 0 00-8.379 8.379v2.85z" ></path><path d="M41.986 29h-1.972a6.053 6.053 0 00-1.686.242c0 .05.008.1.008.149a8.6 8.6 0 01-1.949 5.458A11.449 11.449 0 0139.238 37H48v-2.03A5.992 5.992 0 0041.986 29z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconSharedSchedules";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 4"};

export default SvgIcon;
/* eslint-enable */
