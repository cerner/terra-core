/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M42.981 47.962V42H21.984V11.447l6.553 6.546 4.242-4.243L19.029 0l-.012.012L19.005 0 5.255 13.75l4.243 4.243 6.507-6.508L16.038 48l26.943-.038z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconNavStackUp";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
