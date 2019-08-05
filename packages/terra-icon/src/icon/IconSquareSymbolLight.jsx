/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path fill="#fff" d="M1.5 1.5h45v45h-45z" ></path><path d="M45 3v42H3V3h42m3-3H0v48h48V0z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconSquareSymbolLight";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
