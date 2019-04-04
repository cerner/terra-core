/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M48 20.1l-8.1 8.1-8.1-8.1h5.4c-.8-3.1-2.5-6.1-4.9-8.6-7.4-7.4-19.5-7.4-26.9 0L2 8c9.4-9.4 24.6-9.4 33.9 0a24 24 0 0 1 6.5 12.1H48zM23 26H6v17h17V26m6-6v29H0V20h29z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconRotateRight";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */