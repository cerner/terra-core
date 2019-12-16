/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <script ></script><path fill="#FFF" d="M17 3h14v42H17z" ></path><path d="M14 0v48h20V0H14zm17 45H17V3h14v42z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconRectangleSymbolLight";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
