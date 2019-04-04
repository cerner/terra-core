/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M15 24.1V9c0-5 4-9 9-9s9 4 9 9v15.1c0 5-4 9-9 9s-9-4-9-9zM36 22v2.3c0 6.6-5.4 12-12 12s-12-5.4-12-12V22H9v2.3c0 7.8 5.9 14.2 13.5 14.9V45H18v3h12v-3h-4.5v-5.8c7.6-.7 13.5-7.1 13.5-14.9V22h-3z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconMicrophone";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */