/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M38 0v3H10V0h28zM10 48v-3h28v3H10zm12.5-25.5h3v-9h6L24 6l-7.5 7.5h6v9zm3 12v-9h-3v9h-6L24 42l7.5-7.5h-6z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconExpandRow";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
