/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path fill="#fff" d="M15.5 1.5h17v45h-17z" ></path><path d="M31 3v42H17V3h14m3-3H14v48h20V0z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconRectangleSymbolLight";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
