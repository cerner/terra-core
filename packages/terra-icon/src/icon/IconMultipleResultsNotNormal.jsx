/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M21 34h4v4h-4zM21 6h4v24h-4z" ></path><path d="M39 2V0H7v44h4.001v4H43V2h-3.999ZM9 2h28v40H9V2Z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconMultipleResultsNotNormal";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
