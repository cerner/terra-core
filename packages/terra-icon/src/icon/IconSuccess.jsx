import React from 'react';
import classNames from 'classnames';
import IconBase from '../IconBase';

const SvgIcon = customProps => {
  const attributes = Object.assign({}, customProps);
  attributes.className = classNames("is-static", attributes.className);

  return (
    <IconBase {...attributes}>
      <path fill="#78C346" d="M24 0c13.3 0 24 10.7 24 24S37.3 48 24 48 0 37.3 0 24C0 10.8 10.7 0 23.9 0h.1z" ></path><path fill="#FFF" d="M20 36.4L6.7 23.1l3.6-3.6 9.7 9.9 17.7-17.9 3.6 3.6L20 36.4z" ></path>
    </IconBase>
  )
};

SvgIcon.displayName = "IconSuccess";
SvgIcon.defaultProps = {"className":"is-static","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
