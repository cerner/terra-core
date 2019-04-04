/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M0 10h3v28H0V10zm45 0v28h3V10h-3zM35 22.5H13v-6L5.5 24l7.5 7.5v-6h22v6l7.5-7.5-7.5-7.5v6z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconFitWidth";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */