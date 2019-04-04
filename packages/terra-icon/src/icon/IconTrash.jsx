/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M42.1 4H28V2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H5.9L5 11h38zM38 14H8.1l3.7 32a2.26 2.26 0 0 0 2.2 2h20a2.26 2.26 0 0 0 2.2-2l3.7-32z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconTrash";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
/* eslint-enable */