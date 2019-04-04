/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M39.6 33.9V22.5H25.4v-8.4h5.5V0h-14v14.1h5.5v8.4H8.5v11.4H2.9V48H17V33.9h-5.5v-8.4h25.1v8.4H31V48h14.1V33.9z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconProtocol";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */