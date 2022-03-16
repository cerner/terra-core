/* eslint-disable */
import React from 'react';
import IconBaseDec from '../../IconBaseDec';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBaseDec {...attributes} >
      <defs ><clippath id="a" ><path fill="none" d="M24-29.19l-34-34h68l-34 34z" ></path></clippath></defs><g data-name="48" ><path d="M47.69 17.12l-3.89 3.89a27.712 27.712 0 00-24.37-7.94l-4.6-4.6A33.463 33.463 0 0124 7.19a33.1 33.1 0 0123.69 9.93zM10.08 16.44a28.116 28.116 0 00-5.88 4.57L.31 17.12a32.916 32.916 0 015.77-4.68zM16.83 23.19a18.662 18.662 0 00-6.22 4.23l-3.9-3.9a24.1 24.1 0 015.99-4.46z" ></path><path d="M41.29 23.52l-3.9 3.9a18.742 18.742 0 00-8.68-5.07l-6.06-6.06c.45-.03.9-.04 1.35-.04a24.127 24.127 0 0117.29 7.27zM24.47 30.83c-.15-.01-.31-.01-.47-.01a9.584 9.584 0 00-6.98 3.01l-3.89-3.89a15.181 15.181 0 016.48-3.97zM24 34.39a5.971 5.971 0 00-4.45 1.97L24 40.81l4.45-4.45A5.971 5.971 0 0024 34.39zm-.02 6.09l-.02-.05.02-.04h.04l.02.06z" ></path><path d="M24.02 40.39l.02.06-.06.03-.02-.05.02-.04h.04zM3.848 5.968l2.121-2.121L39.204 37.08l-2.121 2.122z" ></path><g clipPath="url(#a)" ><path d="M24-57.312a27.776 27.776 0 0127.744 27.744A27.776 27.776 0 0124-1.823 27.776 27.776 0 01-3.744-29.568 27.776 27.776 0 0124-57.312m0-5.5A33.244 33.244 0 00-9.244-29.568 33.244 33.244 0 0024 3.677a33.244 33.244 0 0033.244-33.245A33.244 33.244 0 0024-62.812z" ></path></g></g>
    </IconBaseDec>
  );
};

SvgIcon.displayName = "IconWifiSlashDec";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
