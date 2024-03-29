/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M48 27v-6h-7.2a16.37 16.37 0 0 0-2.8-6.8l5-5L38.8 5l-5 5A18 18 0 0 0 27 7.1V0h-6v7.1a16.37 16.37 0 0 0-6.8 2.8l-5-5-4.3 4.3 5 5A17.82 17.82 0 0 0 7.1 21H0v6h7.2a16.37 16.37 0 0 0 2.8 6.8l-5.1 5.1 4.2 4.2 5.1-5.1a17.82 17.82 0 0 0 6.8 2.8V48h6v-7.2a16.37 16.37 0 0 0 6.8-2.8l5.1 5.1 4.2-4.2-5.1-5.1a16.37 16.37 0 0 0 2.8-6.8zm-35.1-3.1A11.1 11.1 0 1 1 24 35a11.14 11.14 0 0 1-11.1-11.1z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconSettings";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","data-name":"Layer 1","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
