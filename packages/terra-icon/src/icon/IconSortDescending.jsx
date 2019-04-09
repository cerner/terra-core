/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M0 7h48v6H0V7zm0 20h33v-6H0v6zm0 14h20v-6H0v6z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconSortDescending";
SvgIcon.defaultProps = {"className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","isBidi":true};

export default SvgIcon;
/* eslint-enable */
