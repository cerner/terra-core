/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M46.1 9.2H29.3a5.63 5.63 0 0 1-3.2-1.3l-3.3-3.3a5.12 5.12 0 0 0-3.2-1.3L9 3a1.9 1.9 0 0 0-1.9 1.9V9h9.5a5.63 5.63 0 0 1 3.2 1.3l3.3 3.3a5.12 5.12 0 0 0 3.2 1.3h16.9a1.9 1.9 0 0 1 1.9 1.9v18.9h1.1a1.9 1.9 0 0 0 1.9-1.9V11a2 2 0 0 0-2-1.8zM40 18a1.9 1.9 0 0 1 1.9 1.9V43a1.81 1.81 0 0 1-1.8 1.9L2 45a2 2 0 0 1-2-1.9V13.9A1.9 1.9 0 0 1 1.9 12H13a5.37 5.37 0 0 1 3.2 1.3l3.3 3.4a5.37 5.37 0 0 0 3.2 1.3z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconProjects";
SvgIcon.defaultProps = {"className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1","isBidi":true};

export default SvgIcon;
/* eslint-enable */