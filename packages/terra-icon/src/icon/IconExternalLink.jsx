/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M39 25h6v23H0V3h23v6H6v33h33V25zm-21.4 9.6l24-24L48 17V0H31l6.4 6.4-24 24 4.2 4.2z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconExternalLink";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
