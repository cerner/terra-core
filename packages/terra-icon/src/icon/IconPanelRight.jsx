/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M48 48h-8V.1h8V48zm-14 0V0H0v48h34zM7 12.2L11.3 8 27 24 11.3 40 7 35.8 18.6 24 7 12.2z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconPanelRight";
SvgIcon.defaultProps = {"className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","isBidi":true};

export default SvgIcon;
/* eslint-enable */
