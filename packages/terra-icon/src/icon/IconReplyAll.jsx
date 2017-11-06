/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M12 20.2l14-14v9.6h1c16.5 0 21 9.9 21 22.2v4.8c-2.1-10-9.4-17.9-20-18h-2v9.4l-14-14zm3.1 15.1L0 20.2l15.1-15 2.1 2.2-13 12.9 13 12.9-2.1 2.1z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconReplyAll";
SvgIcon.defaultProps = {"className":"","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","isBidi":true};

export default SvgIcon;
/* eslint-enable */
