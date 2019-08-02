/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <circle cx="24" cy="24" r="22.5" fill="#fff" ></circle><path d="M24 3c11.6 0 21 9.4 21 21s-9.4 21-21 21S3 35.6 3 24 12.4 3 24 3m0-3C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24C48 10.8 37.3 0 24.1 0H24z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconCircleSymbolLight";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
