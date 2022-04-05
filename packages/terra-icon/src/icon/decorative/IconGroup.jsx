/* eslint-disable */
import React from 'react';
import IconBaseDec from '../../IconBaseDec';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBaseDec {...attributes} >
      <path d="M10.529 42v-3.8A11.174 11.174 0 0121.7 27.029h3.664A11.173 11.173 0 0136.539 38.2V42zm13.005-32a7.521 7.521 0 107.521 7.521A7.521 7.521 0 0023.534 10zm10.521 7.521a10.463 10.463 0 01-.126 1.533 6.843 6.843 0 002.227.376 6.374 6.374 0 006.544-6.187 6.374 6.374 0 00-6.546-6.186A6.639 6.639 0 0030.7 9.836a10.485 10.485 0 013.355 7.685zM37.691 21h-3.382c-.3 0-.587.02-.877.045a10.573 10.573 0 01-2.636 4.07A14.234 14.234 0 0139.174 35H48v-3.552A10.38 10.38 0 0037.691 21zm-26.86-1.57a5.83 5.83 0 002.292-.47 10.33 10.33 0 012.9-8.8 5.964 5.964 0 00-5.2-3.1 6.1 6.1 0 00-6 6.186 6.1 6.1 0 006.008 6.184zm5.441 5.685a10.57 10.57 0 01-2.644-4.088c-.169-.009-.336-.027-.508-.027H9.88C4.423 21 0 25.678 0 31.448V35h7.9a14.232 14.232 0 018.372-9.885z" ></path>
    </IconBaseDec>
  );
};

SvgIcon.displayName = "IconGroupDec";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Option 1"};

export default SvgIcon;
/* eslint-enable */
