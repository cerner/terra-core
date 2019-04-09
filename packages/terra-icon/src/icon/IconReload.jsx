/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M14.6 18L9 12.4C12.5 7.9 17.9 5 24 5c10.5 0 19 8.5 19 19s-8.5 19-19 19c-5.6 0-10.5-2.3-14-6.1l-3.5 3.5C10.9 45.1 17.1 48 24 48c13.3 0 24-10.7 24-24S37.3 0 24 0C16.5 0 9.8 3.4 5.4 8.8L0 3.4V18h14.6z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconReload";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
