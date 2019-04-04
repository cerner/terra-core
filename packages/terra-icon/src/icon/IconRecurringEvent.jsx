/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M31 5V1.8c0-1-.8-1.8-1.8-1.8h-1.5c-1 0-1.8.8-1.8 1.8V5H11V1.8c0-1-.8-1.8-1.8-1.8H7.8C6.8 0 6 .8 6 1.8V5H2v33h19v-3H5V17h27v4h3V5h-4z" ></path><path d="M48 33v-7.3l-2.7 2.7C43.1 25.7 39.7 24 36 24c-6.6 0-12 5.4-12 12s5.4 12 12 12c3.5 0 6.6-1.5 8.7-3.8L43 42.4c-1.7 1.9-4.2 3.1-7 3.1-5.2 0-9.5-4.3-9.5-9.5s4.3-9.5 9.5-9.5c3 0 5.8 1.5 7.5 3.7L40.7 33H48z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconRecurringEvent";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */