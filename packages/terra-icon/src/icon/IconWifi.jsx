/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <g data-name="48" ><path d="m47.69 17.12-3.9 3.9a27.673 27.673 0 0 0-39.58 0l-3.9-3.9a33.224 33.224 0 0 1 47.38 0z" ></path><path d="m41.29 23.52-3.9 3.9a18.646 18.646 0 0 0-26.78 0l-3.9-3.9a24.2 24.2 0 0 1 34.58 0z" ></path><path d="m34.87 29.94-3.89 3.89a9.6 9.6 0 0 0-13.96 0l-3.89-3.89a15.1 15.1 0 0 1 21.74 0zM24 34.39a5.971 5.971 0 0 0-4.45 1.97L24 40.81l4.45-4.45A5.971 5.971 0 0 0 24 34.39zm-.02 6.09-.02-.05.02-.04h.04l.02.06z" ></path><path d="m24.04 40.45-.06.03-.02-.05.02-.04h.04z" ></path></g>
    </IconBase>
  );
};

SvgIcon.displayName = "IconWifi";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
