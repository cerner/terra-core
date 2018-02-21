/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M5.6 20.1A24 24 0 0 1 12.1 8C21.5-1.3 36.7-1.3 46 8l-3.5 3.5c-7.4-7.4-19.5-7.4-26.9 0-2.5 2.5-4.1 5.4-4.9 8.6h5.4L8 28.2l-8-8.1h5.6zM25 26v17h17V26H25m-6-6h29v29H19V20z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconRotateLeft";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
