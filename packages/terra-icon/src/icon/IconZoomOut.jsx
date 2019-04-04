/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M47.4 43.3L33.8 29.6c2.2-3.1 3.6-6.8 3.6-10.9C37.3 8.4 29 0 18.7 0S0 8.4 0 18.7s8.4 18.6 18.7 18.6c4.1 0 7.9-1.3 10.9-3.6l13.6 13.6c.8.8 2 .8 2.8 0l1.4-1.4c.8-.6.8-1.9 0-2.6zM2.9 18.7C2.9 10 10 2.9 18.7 2.9S34.4 10 34.4 18.7s-7.1 15.8-15.8 15.8S2.9 27.4 2.9 18.7zM7 17h23v3H7v-3z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconZoomOut";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */