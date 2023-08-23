/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M10.529 42v-3.8A11.174 11.174 0 0 1 21.7 27.029h3.664A11.173 11.173 0 0 1 36.539 38.2V42zm13.005-32a7.521 7.521 0 1 0 7.521 7.521A7.521 7.521 0 0 0 23.534 10zm10.521 7.521a10.463 10.463 0 0 1-.126 1.533 6.843 6.843 0 0 0 2.227.376 6.374 6.374 0 0 0 6.544-6.187 6.374 6.374 0 0 0-6.546-6.186A6.639 6.639 0 0 0 30.7 9.836a10.485 10.485 0 0 1 3.355 7.685zM37.691 21h-3.382c-.3 0-.587.02-.877.045a10.573 10.573 0 0 1-2.636 4.07A14.234 14.234 0 0 1 39.174 35H48v-3.552A10.38 10.38 0 0 0 37.691 21zm-26.86-1.57a5.83 5.83 0 0 0 2.292-.47 10.33 10.33 0 0 1 2.9-8.8 5.964 5.964 0 0 0-5.2-3.1 6.1 6.1 0 0 0-6 6.186 6.1 6.1 0 0 0 6.008 6.184zm5.441 5.685a10.57 10.57 0 0 1-2.644-4.088c-.169-.009-.336-.027-.508-.027H9.88C4.423 21 0 25.678 0 31.448V35h7.9a14.232 14.232 0 0 1 8.372-9.885z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconGroup";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","data-name":"Option 1","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
