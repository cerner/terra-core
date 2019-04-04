/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M9 39l4.6-10.4 5.7 5.7L9 39zM45.4 8.5l2.2-2.2c.5-.5.5-1.4 0-2l-4-4c-.5-.5-1.4-.5-2 0l-2.2 2.2 6 6zm-7.6-4.2L15.1 27l5.9 5.9 22.6-22.6-5.8-6zM41 45H3V7h24.8L31 4H0v44h44V17l-3 3.2V45z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconCompose";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */