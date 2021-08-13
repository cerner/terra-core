/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M43 9.967V29c0 11-19 19-19 19S5 40 5 29V9.967C18.245 9.62 24 3 24 3s5.755 6.62 19 6.967zM29 22a5 5 0 10-6.917 4.616L20.789 36h6.422l-1.294-9.384A5 5 0 0029 22z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconConfidential";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"compound shapes"};

export default SvgIcon;
/* eslint-enable */
