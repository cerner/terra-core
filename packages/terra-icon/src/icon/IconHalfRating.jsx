/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M48 18.6c0-.75-.54-1.21-1.62-1.39L31.9 15 25.41 1.24C25.05.41 24.58 0 24 0c-.14 0-.28.03-.41.08-.39.16-.73.54-1 1.16L16.1 15 1.62 17.21C.54 17.39 0 17.86 0 18.6c0 .42.24.91.72 1.45l10.5 10.71-2.48 15.12c-.02.14-.03.26-.04.36s-.01.18-.01.24c0 .42.1.78.3 1.07.2.3.5.45.9.45.35 0 .73-.12 1.15-.36L24 40.5l12.95 7.14c.4.24.79.36 1.15.36.38 0 .68-.15.88-.44.2-.29.3-.65.3-1.07 0-.26-.01-.46-.03-.6l-2.48-15.12 10.47-10.71c.51-.53.76-1.01.76-1.46zM34.63 28.66l-1.06 1.09.25 1.5 2.03 12.36-10.4-5.73-1.45-.81V5.28l5.19 11 .68 1.45 1.58.24 11.87 1.81-8.69 8.88z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconHalfRating";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */