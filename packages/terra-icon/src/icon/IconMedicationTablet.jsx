/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M22.5.1V48C10.5 47.2.9 37.6.1 25.6-.8 12.3 9.3.9 22.5.1zM25 0v48c12.6-.8 23-11.2 23-24S37.6.8 25 0z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconMedicationTablet";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
