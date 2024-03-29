/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M44.4 13.2a3.59 3.59 0 0 0-3.6 3.6 2.77 2.77 0 0 0 .3 1.3l-9.8 9.8a3.65 3.65 0 0 0-1.5-.3 3.14 3.14 0 0 0-2.1.7L19.4 20a5 5 0 0 0 .2-1.2 3.6 3.6 0 0 0-7.2 0 3 3 0 0 0 .2 1l-7.9 7.9a3.59 3.59 0 0 0-1.1-.2 3.6 3.6 0 1 0 3.6 3.6 3.19 3.19 0 0 0-.3-1.4l7.7-7.7a3.19 3.19 0 0 0 1.4.3 2.77 2.77 0 0 0 1.3-.3l8.9 8.9v.2a3.61 3.61 0 1 0 7-1L43.3 20a4.25 4.25 0 0 0 1.1.2 3.59 3.59 0 0 0 3.6-3.6 3.55 3.55 0 0 0-3.6-3.4z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconAnalytics";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","data-name":"Layer 1","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
