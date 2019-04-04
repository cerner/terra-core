/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M48 10.9v26.3l-10-10v-6.3l10-10zm-13 .4C35 10 34 9 32.7 9H2.3C1 9 0 10 0 11.3v25.4C0 38 1 39 2.3 39h30.4c1.3 0 2.3-1 2.3-2.3V11.3z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconVideoCamera";
SvgIcon.defaultProps = {"className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","isBidi":true};

export default SvgIcon;
/* eslint-enable */