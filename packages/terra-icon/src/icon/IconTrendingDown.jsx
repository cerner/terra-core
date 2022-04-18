/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M40.4 8H29l7.379 7.379-9.985 9.984-7.376-7.376L1.677 35.328l4.242 4.242 13.099-13.099 7.376 7.377 14.227-14.227L48 27V8h-7.6z" data-name="48" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconTrendingDown";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
