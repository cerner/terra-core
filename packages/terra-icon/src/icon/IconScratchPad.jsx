/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M40.7 5H7.3c-.5 0-.9.3-1.1.7L0 20v21c0 1.1.9 2 2 2h44c1.1 0 2-.9 2-2V20.1L41.8 5.7c-.2-.4-.6-.7-1.1-.7zm-11 15c0 3.1-2.6 5.6-5.7 5.6s-5.6-2.5-5.7-5.6h-15L8.5 8h31.1l5.2 12H29.7z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconScratchPad";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
