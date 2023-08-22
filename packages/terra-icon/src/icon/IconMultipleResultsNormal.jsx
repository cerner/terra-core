/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M38 2V0H6v44h4.001v4H42V2h-3.999ZM8 2h28v40H8V2Zm32.001 44H12v-2h26V4h2.001v42Z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconMultipleResultsNormal";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
