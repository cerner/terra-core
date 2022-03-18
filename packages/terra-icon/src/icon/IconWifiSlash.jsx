/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <defs ><clippath id="a" ><path fill="none" d="M24-29.19l-34-34h68l-34 34z" ></path></clippath></defs><g data-name="48" ><path d="M12.7 19.06a24.1 24.1 0 00-6 4.46l3.9 3.9a18.66 18.66 0 016.22-4.23zm-6.62-6.62a32.92 32.92 0 00-5.77 4.68L4.2 21a28.12 28.12 0 015.88-4.57zm18.39 18.39L19.61 26a15.18 15.18 0 00-6.48 4L17 33.83a9.58 9.58 0 017-3zM24 7.19a33.46 33.46 0 00-9.17 1.28l4.6 4.6A27.71 27.71 0 0143.8 21l3.89-3.89A33.1 33.1 0 0024 7.19zm-1.35 9.1l6.06 6.06a18.74 18.74 0 018.68 5.07l3.9-3.9A24.13 24.13 0 0024 16.25c-.45 0-.9.01-1.35.04zM24 34.39a6 6 0 00-4.45 2L24 40.81l4.45-4.45A6 6 0 0024 34.39zM3.85 6l33.23 33.2 2.12-2.12L6 3.85z" ></path><g clipPath="url(#a)" ><path d="M24-57.31a27.77 27.77 0 0127.74 27.74A27.77 27.77 0 0124-1.82 27.77 27.77 0 01-3.74-29.57 27.77 27.77 0 0124-57.31m0-5.5A33.24 33.24 0 00-9.24-29.57 33.25 33.25 0 0024 3.68a33.25 33.25 0 0033.24-33.25A33.24 33.24 0 0024-62.81z" ></path></g></g>
    </IconBase>
  );
};

SvgIcon.displayName = "IconWifiSlash";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
