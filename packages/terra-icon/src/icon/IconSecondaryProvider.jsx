/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M33 14c3.1 0 5.7 2.6 5.7 5.7s-2.6 5.7-5.7 5.7-5.7-2.6-5.7-5.7S29.8 14 33 14m0-3c-4.8 0-8.7 3.9-8.7 8.7s3.9 8.7 8.7 8.7c4.8 0 8.7-3.9 8.7-8.7S37.8 11 33 11zm2.1 22.7c5.5 0 9.9 4.4 9.9 9.9V45H20.9v-1.4c0-5.5 4.4-9.9 9.9-9.9h4.3m0-3h-4.2c-7.1 0-12.9 5.8-12.9 12.9V48h30v-4.4c0-7.1-5.8-12.9-12.9-12.9z" ></path><path d="M23.7 8.7c0 4.8-3.9 8.7-8.7 8.7s-8.7-3.9-8.7-8.7S10.2 0 15 0s8.7 3.9 8.7 8.7zm1.8 20c-2.4-2-4-5-4.1-8.3-1.3-.4-2.7-.7-4.2-.7H13c-7.2 0-13 5.8-13 12.9V37h16.4c1.8-3.9 5-6.9 9.1-8.3z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconSecondaryProvider";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
