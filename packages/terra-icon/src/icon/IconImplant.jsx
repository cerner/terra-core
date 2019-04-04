/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M48 12l-5.2-5.2-1.2 1.1-1.7-1.8L41 5l-5-5-1 1-1.1 7.4L3 39.3 0 48l8.7-3 30.9-30.9L47 13z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconImplant";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */