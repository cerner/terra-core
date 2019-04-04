/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path fill="#FFF" d="M45 24c0-9.3-5.9-17.3-14.8-20.1-2-.6-4.1-.9-6.2-.9C12.4 3 3 12.4 3 24s9.4 21 21 21c6.5 0 12.5-2.9 16.5-8 2.9-3.7 4.5-8.2 4.5-13z" ></path><path d="M48 24c0 5.5-1.8 10.6-5.2 14.9C38.2 44.7 31.4 48 24 48 10.8 48 0 37.2 0 24S10.8 0 24 0c2.4 0 4.8.4 7.1 1.1C41.2 4.2 48 13.4 48 24zm-3 0c0-9.3-5.9-17.3-14.8-20.1-2-.6-4.1-.9-6.2-.9C12.4 3 3 12.4 3 24s9.4 21 21 21c6.5 0 12.5-2.9 16.5-8 2.9-3.7 4.5-8.2 4.5-13z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconUnavailable";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */