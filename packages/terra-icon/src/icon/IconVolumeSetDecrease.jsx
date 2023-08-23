/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M29.121 48.059 15.087 34.024H.05V13.976h15.037L29.121-.059Zm6.323-35.406-2.131 2.131a13.009 13.009 0 0 1 0 18.43l2.131 2.131a16.039 16.039 0 0 0 0-22.692Z" data-name="256" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconVolumeSetDecrease";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
