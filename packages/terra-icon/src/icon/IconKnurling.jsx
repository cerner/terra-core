/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M15.4 18.5c3.1 0 5.5 2.5 5.6 5.5 0 3.1-2.5 5.5-5.5 5.6-3.1 0-5.5-2.5-5.6-5.5 0-3.1 2.4-5.6 5.5-5.6zm0-18.5c3.1 0 5.5 2.5 5.6 5.5 0 3.1-2.5 5.5-5.5 5.6-3.1 0-5.5-2.5-5.6-5.5 0-3.1 2.4-5.6 5.5-5.6zm0 36.9c3.1 0 5.5 2.5 5.6 5.5 0 3.1-2.5 5.5-5.5 5.6-3.1 0-5.5-2.5-5.6-5.5-.1-3.1 2.4-5.6 5.5-5.6zm17.2-18.4c3.1 0 5.5 2.5 5.5 5.5s-2.5 5.5-5.5 5.5-5.5-2.5-5.5-5.5 2.4-5.5 5.5-5.5zm0-18.5c3.1 0 5.5 2.5 5.5 5.5S35.6 11 32.6 11s-5.5-2.5-5.5-5.5S29.5 0 32.6 0zm0 36.9c3.1 0 5.5 2.5 5.5 5.5S35.7 48 32.6 48s-5.5-2.5-5.5-5.5c0-3.1 2.4-5.6 5.5-5.6z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconKnurling";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */