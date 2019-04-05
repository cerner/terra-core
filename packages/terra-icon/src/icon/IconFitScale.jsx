/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M0 10h3v28H0V10zm45 0v28h3V10h-3zM35 22.5h-9.5V13h6L24 5.5 16.5 13h6v9.5H13v-6L5.5 24l7.5 7.5v-6h9.5V35h-6l7.5 7.5 7.5-7.5h-6v-9.5H35v6l7.5-7.5-7.5-7.5v6zM38 0H10v3h28V0zM10 48h28v-3H10v3z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconFitScale";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
