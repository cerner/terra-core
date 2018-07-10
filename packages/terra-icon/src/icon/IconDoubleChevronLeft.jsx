/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M0 24L23.4 0l3.9 3.9L7.6 24l19.7 20.1-3.9 3.8L0 24zm20.7 0L44.1 0 48 3.9 28.3 24 48 44.1l-3.9 3.8L20.7 24z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconDoubleChevronLeft";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
