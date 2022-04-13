/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M18.28 10.738L29.108-.089v21.655zM6.6 13.963H0v20.074h15.056l14.052 14.052V36.471zm38.276 28.7L5.964 3.746 3.835 5.875l38.912 38.912z" data-name="256" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconVolumeSetMute";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
