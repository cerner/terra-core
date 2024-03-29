/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M46 2H36v2.957h9.043V27H2.957V4.957H12V2H2a2.006 2.006 0 0 0-2 2v32a2.006 2.006 0 0 0 2 2h19v5h-5v3h16v-3h-5v-5h19a2.006 2.006 0 0 0 2-2V4a2.006 2.006 0 0 0-2-2zM24 34.511a2.215 2.215 0 1 1 2.215-2.211A2.215 2.215 0 0 1 24 34.511zm6.933-23.322L26 6.537V22h-4V6.537l-4.933 4.652L14.6 8.863 24 0l9.4 8.863z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconStartPresenting";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
