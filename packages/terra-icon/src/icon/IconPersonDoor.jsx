/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M21 43H5V5h21V0H0v48h26v-5zm23-18h-5v-4a2 2 0 0 0-.91-1.674l-.533-.467a7.994 7.994 0 0 1-6.289-5.833A2.009 2.009 0 0 0 31 13H18.672l-4.086 4.086a2 2 0 1 0 2.779 2.877l.049-.049L20.328 17h6.253L15.319 27.819l-2.37-2.529A2.5 2.5 0 0 0 9.3 28.71l5.833 6.221 6.893-6.622L29 35.015V40.5a2.5 2.5 0 0 0 5 0v-7.614l-4.6-4.424 5.6-5.7V29h9a2 2 0 0 0 0-4zM39 6a5 5 0 1 1-5 5 5 5 0 0 1 5-5z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconPersonDoor";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","data-name":"Layer 3","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
