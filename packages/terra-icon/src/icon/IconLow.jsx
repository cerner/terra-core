/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path fill="#0053E6" d="M47.7 23.2L24.8.3c-.5-.4-1.1-.4-1.6 0L.3 23.2c-.4.5-.4 1.1 0 1.6l22.9 22.9c.5.4 1.1.4 1.6 0l22.9-22.9c.4-.5.4-1.1 0-1.6zm-.7.9L24.1 47h-.2L1 24.1v-.2L23.9 1h.2L47 23.9v.2z" ></path><path fill="#0053E6" d="M24 42l11-11h-8V8h-6v23h-8z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconLow";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
