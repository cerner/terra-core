/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M10.5 26.3a16 16 0 01.9-5.3L8 17.6a6.73 6.73 0 01-2-4.8A6.41 6.41 0 018 8a6.76 6.76 0 019.6 0l9 9a6.88 6.88 0 010 9.6 6.27 6.27 0 01-3.4 1.8 2.65 2.65 0 00.5.6l4.1 4.1a11.36 11.36 0 003.1-2.3 12.8 12.8 0 000-18.1l-9-9a12.63 12.63 0 00-9-3.7 12.63 12.63 0 00-9 3.7A12.1 12.1 0 000 12.8a12.63 12.63 0 003.7 9l7 7a21.05 21.05 0 01-.2-2.5zm27-4.6a16 16 0 01-.9 5.3l3.4 3.4a6.79 6.79 0 11-9.6 9.6l-9-9a6.88 6.88 0 010-9.6 6.27 6.27 0 013.4-1.8 2.65 2.65 0 00-.5-.6l-4-4a11.36 11.36 0 00-3.1 2.3 12.8 12.8 0 000 18.1l9 9a12.73 12.73 0 0018-18l-7-7a8 8 0 01.3 2.3z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconLink";
SvgIcon.defaultProps = {"className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1","isBidi":true};

export default SvgIcon;
/* eslint-enable */
