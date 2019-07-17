/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M48 34H38V24h-4v10H24v4h10v10h4V38h10v-4zM33.91 11a3.95 3.95 0 00-.94-1.84L24.67 1C24.19.58 23.62.29 23 .13V0H6.44C5.64 0 5 .64 5 1.44v35.13c0 .79.64 1.43 1.44 1.43H21v-3H8V3h12v9.56c0 .79.64 1.43 1.44 1.44H31v7h3V11h-.09zM23 3.57L30.57 11H23V3.57z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconDocumentPlus";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
