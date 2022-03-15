/* eslint-disable */
import React from 'react';
import IconBaseDec from '../../IconBaseDec';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBaseDec {...attributes}>
      <g data-name="48" ><path d="M36.158 9.193l9.016-9.02 2.652 2.652-9.016 9.02z" ></path><path d="M29.625 0h3.75v6h-3.75z" ></path><path d="M42 14.625h6v3.75h-6z" ></path><path d="M.173 45.174l9.017-9.018 2.653 2.652-9.018 9.018z" ></path><path d="M14.625 42h3.75v6h-3.75z" ></path><path d="M0 29.625h6v3.75H0z" ></path><path d="M8.578 19.2A7.582 7.582 0 0119.3 8.477l7.419 7.423a7.606 7.606 0 01.959 9.552l5 3.317a13.623 13.623 0 00-1.717-17.111l-7.418-7.423A13.582 13.582 0 004.336 23.443z" ></path><path d="M42.362 23.47l-4.242 4.242 1.351 1.351a7.428 7.428 0 01-10.5 10.505l-7.31-7.31a7.453 7.453 0 01-.95-9.342l-5.008-3.3A13.473 13.473 0 0017.414 36.5l7.31 7.312A13.428 13.428 0 0043.713 24.82z" ></path></g>
    </IconBaseDec>
  );
};

SvgIcon.displayName = "IconBrokenLinkUnlinkDec";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
