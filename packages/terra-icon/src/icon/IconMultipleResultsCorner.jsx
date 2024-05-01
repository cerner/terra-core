/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <polygon points="0 0 48 0 48 48 22.29 22.29 0 0" fill="#000" strokeWidth="0" ></polygon>
    </IconBase>
  );
};

SvgIcon.displayName = "IconMultipleResultsCorner";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","id":"a"};

export default SvgIcon;
/* eslint-enable */
