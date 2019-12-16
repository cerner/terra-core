/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <script ></script><path fill="#FFF" d="M3 3h42v42H3z" ></path><path d="M0 0v48h48V0H0zm45 45H3V3h42v42z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconSquareSymbolLight";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
