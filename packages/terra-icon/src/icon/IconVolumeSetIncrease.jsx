/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M29 47.938 15.036 33.974H.075V14.026h14.961L29 .062ZM40.889 7.026 38.765 9.15a20.9 20.9 0 0 1 .035 29.669l2.123 2.123a23.934 23.934 0 0 0-.033-33.916ZM36.979 24a12.924 12.924 0 0 1-3.82 9.18l2.121 2.12a15.951 15.951 0 0 0-.035-22.631l-2.12 2.12A12.923 12.923 0 0 1 36.979 24Z" data-name="256" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconVolumeSetIncrease";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
