/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M46.5 10.4l-8.9-8.9A6.38 6.38 0 0033.9 0H2.2A2.22 2.22 0 000 2.2v43.7A2.2 2.2 0 002.2 48h43.7a2.22 2.22 0 002.2-2.2V14.1a7.26 7.26 0 00-1.6-3.7zM31 18H8V3h23zM24 6h4v9h-4z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconSave";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
/* eslint-enable */
