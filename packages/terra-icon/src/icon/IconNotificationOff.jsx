/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M24 3c.7 0 1.3.5 1.4 1.2l.4 1.8 1.7.6C32 8.1 35 12.3 35 17v10.2c.3 2.4 1.4 4.7 3.2 6.4.7.7 1.2 1.5 1.6 2.3H8.3c.4-.8.9-1.6 1.6-2.3 1.7-1.7 2.8-4 3.2-6.4v-9.9-.3c0-4.7 3-8.8 7.5-10.3l1.6-.7.3-1.8c.2-.7.8-1.2 1.5-1.2m0-3c-2.2 0-4 1.6-4.4 3.7-5.5 1.8-9.5 7.1-9.5 13.2v9.8c-.2 1.8-1.1 3.4-2.3 4.7-2 2-3.2 4.5-3.2 7.2v.2h38.8v-.2c0-2.7-1.2-5.3-3.2-7.2-1.2-1.2-2.1-2.9-2.3-4.7v-9.5-.3c0-6.2-4-11.4-9.5-13.2C28 1.6 26.2 0 24 0zm2.6 44.3c-.6.7-1.6 1.2-2.6 1.2s-2-.5-2.6-1.2h5.2m3.4-2.5H18v.2c0 3.3 2.7 6 6 6s6-2.7 6-6v-.2z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconNotificationOff";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */