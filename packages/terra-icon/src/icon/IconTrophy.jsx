/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M46 5h-7V2a2 2 0 00-2-2H11a2 2 0 00-2 2v3H2a2 2 0 00-2 2v4.2a17.63 17.63 0 008.3 14.9l1.5 1a14.59 14.59 0 0012.1 9.8v3.3a13.69 13.69 0 00-10.5 7.9h25a13.9 13.9 0 00-10.5-7.9v-3.3A14.31 14.31 0 0038 27.1l1.6-1a17.4 17.4 0 008.3-14.9V7A1.86 1.86 0 0046 5zM3 11.2V8h6v14a3.4 3.4 0 00.1 1A14.5 14.5 0 013 11.2zm42 0A14.5 14.5 0 0138.9 23c0-.3.1-.7.1-1V8h6z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconTrophy";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
/* eslint-enable */
