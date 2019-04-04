/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M48 8v16h-6v-5.7L25.31 35l-4.56-4.56L9.18 42H48v6H0V0h6v36.7l14.75-14.76 4.56 4.56L37.82 14H32V8z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconVisualization";
SvgIcon.defaultProps = {"className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1","isBidi":true};

export default SvgIcon;
/* eslint-enable */