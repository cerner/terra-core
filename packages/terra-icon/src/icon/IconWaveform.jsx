/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M47.927 7a3.726 3.726 0 00-3.653-3H3.726A3.726 3.726 0 00.073 7H0v33.274A3.726 3.726 0 003.726 44h40.548A3.726 3.726 0 0048 40.274V7zM45 40.274a.727.727 0 01-.726.726H3.726A.727.727 0 013 40.274V29h6.356a1 1 0 00.9-.569l.871-1.826 2.392 6.73a1 1 0 001.92-.123l2.1-9.671 2.451 12.341a1 1 0 00.971.806h.01a1 1 0 00.976-.788l2.293-10.512 1.119 2.965A1 1 0 0026.3 29h5.3a1 1 0 00.966-.744l.618-2.33 2.116 8.008a1 1 0 00.913.744.989.989 0 00.988-.643L39.117 29H45zM45 27h-6.571a1 1 0 00-.935.644l-1.058 2.774-2.284-8.658a1 1 0 00-.965-.745 1 1 0 00-.967.743L30.829 27h-3.841l-2.068-5.478a1.012 1.012 0 00-1.009-.645 1 1 0 00-.9.785l-1.989 9.122-2.458-12.354a1 1 0 00-.971-.8h-.009a1 1 0 00-.978.788l-2.375 10.94-2.023-5.693a1 1 0 00-1.845-.1L8.726 27H3V15h42z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconWaveform";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 3"};

export default SvgIcon;
/* eslint-enable */
