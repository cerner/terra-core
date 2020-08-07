/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M12.542 2H46a2.006 2.006 0 012 2v32a1.988 1.988 0 01-.342 1.116L37.542 27h7.5V4.957H15.5zM27 43h5v3H16v-3h5v-5H2a2.006 2.006 0 01-2-2V4a1.984 1.984 0 01.523-1.334L2.957 5.1V27h21.9l11 11H27zm-.785-10.7A2.215 2.215 0 1024 34.511a2.215 2.215 0 002.215-2.211zm18.4 6.021L6.317.017l-2.1 2.1 38.2 38.2z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconStopPresenting";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 2 copy"};

export default SvgIcon;
/* eslint-enable */
