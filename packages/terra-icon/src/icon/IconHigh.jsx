import React from 'react';
import classNames from 'classnames';
import IconBase from '../IconBase';

const SvgIcon = customProps => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path fill="#FF6100" d="M47.7 23.2L24.8.3c-.5-.4-1.1-.4-1.6 0L.3 23.2c-.4.5-.4 1.1 0 1.6l22.9 22.9c.5.4 1.1.4 1.6 0l22.9-22.9c.4-.5.4-1.1 0-1.6zm-.7.9L24.1 47h-.2L1 24.1v-.2L23.9 1h.2L47 23.9v.2z" ></path><path fill="#FF6100" d="M24 6L13 17h8v23h6V17h8z" ></path>
    </IconBase>
  )
};

SvgIcon.displayName = "IconHigh";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
