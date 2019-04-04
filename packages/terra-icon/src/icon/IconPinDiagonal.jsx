/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M44 15.3L32.7 4c-.8-.8-2-.8-2.8 0l-1.4 1.4c-.8.8-.8 2 0 2.8l1.4 1.4-9.5 9.5h-.7c-3.8-.2-7.5 1.2-10.2 3.9l6.7 6.7L3.4 42.5l2.1 2.1 12.7-12.7 6.7 6.7c2.7-2.7 4.1-6.4 3.9-10.1v-.8l9.5-9.5 1.4 1.4c.8.8 2 .8 2.8 0l1.4-1.4c.9-.9.9-2.1.1-2.9z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconPinDiagonal";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */