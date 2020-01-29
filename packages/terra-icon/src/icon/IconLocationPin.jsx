/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M36.7 7.6C32.9.6 24.1-2.1 17 1.8s-9.7 12.6-5.8 19.7v.1L23 47c0 .6.4 1 1 1s1-.4 1-1l11.7-25.6c2.4-4.3 2.4-9.5 0-13.8zM24 21c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconLocationPin";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
