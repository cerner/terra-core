/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M19 40h8v8h-8v-8zm20.2-26.5c0 4.1-1.4 6.9-3 8.9-1.4 1.7-3.1 2.9-4.4 3.8-2.4 1.6-4.8 2.1-4.8 3.6V32h-8v-1.5c0-3.8 2-7.1 5-8.9 1.2-.7 2.4-1.3 3.2-1.9 2-1.1 3.4-3.2 3.4-5.7 0-3.5-2.9-6.4-6.4-6.4h-1c-3.3 0-6 2.6-6.5 5.7v.6h-8C8.9 7 13.2 2.3 19 .7c1.1-.3 3.2-.7 5.5-.7h.3c9.1 0 14.4 6.9 14.4 13.5z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconQuestion";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
