/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M48 10.9v26.3l-10-10v-6.3l10-10zM35 29.8V11.3C35 10 34 9 32.7 9H14.2L35 29.8zM3.8 9H2.3C1 9 0 10 0 11.3v25.4C0 38 1 39 2.3 39h30.4c.3 0 .6-.1.9-.2L3.8 9zm40.4 33.1L5.9 3.8 3.8 5.9 42 44.1l2.2-2z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconVideoCameraDisabled";
SvgIcon.defaultProps = {"className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","isBidi":true};

export default SvgIcon;
/* eslint-enable */
