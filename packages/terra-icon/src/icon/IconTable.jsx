/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M0 0v48h48V0zm31 9v10H18V9zm0 13v10H18V22zm3 0h11v10H34zm0-3V9h11v10zM3 9h12v10H3zm0 13h12v10H3zm0 23V35h12v10zm15 0V35h13v10zm16 0V35h11v10z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconTable";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
/* eslint-enable */
