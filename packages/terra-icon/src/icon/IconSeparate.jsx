/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M38.1 36h-9.5c-.9 0-1.6-.7-1.6-1.6V13.6c0-.9.7-1.6 1.6-1.6h9.5v6l9.3-9-9.3-9v6h-9.5C24.4 6 21 9.4 21 13.6V21H0v6h21v7.4c0 4.2 3.4 7.6 7.6 7.6h9.5v6l9.3-9-9.3-9v6z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconSeparate";
SvgIcon.defaultProps = {"className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","isBidi":true};

export default SvgIcon;
/* eslint-enable */
