/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="m41.9 9.9-8.8-8.8A3.12 3.12 0 0 0 30.6 0H14.2A2.56 2.56 0 0 0 12 2v5H7a2.57 2.57 0 0 0-2 2v37a2.24 2.24 0 0 0 2 2h26a2.07 2.07 0 0 0 2-2v-5h6.1a2.06 2.06 0 0 0 1.9-2V12a2.92 2.92 0 0 0-1.1-2.1zM31 3.2l9 8.8h-9zM32 45H8V10h4v29a2.25 2.25 0 0 0 2.1 2H32zm8-7H15V3h13v9a2.77 2.77 0 0 0 3.1 3H40z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconDocuments";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","data-name":"Layer 1","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
