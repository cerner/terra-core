/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M10 48v-3h28v3H10zm0-45h28V0H10v3zm12.5 10v22h-6l7.5 7.5 7.5-7.5h-6V13h6L24 5.5 16.5 13h6z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconFitHeight";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
