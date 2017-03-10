import React from 'react';
import IconBase from '../IconBase';
import classNames from 'classnames';

const SvgIcon = customProps => {
  const attributes = Object.assign({}, customProps);
  attributes.className = classNames("is-static", attributes.className);

  return (
    <IconBase {...attributes}>
      <path d="M39.5 16L24 0 8.5 16H21v32h6V16z" ></path>
    </IconBase>
  )
};

SvgIcon.displayName = "IconMax";
SvgIcon.defaultProps = {"className":"is-static","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
