/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M21.154 47.867V28.351l-7.583 6.416-2.584-3.055 9.134-7.726-9.131-7.7 2.578-3.058 7.586 6.4V.133l15.822 14.834L26.32 23.98l10.693 9.013zm4-19.638v10.4L31 33.154zm0-18.863v10.362l5.81-4.915z" data-name="48" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconBluetooth";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
