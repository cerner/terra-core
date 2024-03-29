/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M24 0a11.3 11.3 0 1 1-11.3 11.3A11.35 11.35 0 0 1 24 0zm19.5 48v-5.7a16.77 16.77 0 0 0-16.8-16.8h-5.5A16.75 16.75 0 0 0 4.5 42.3V48z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconPerson";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","data-name":"Layer 1","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
