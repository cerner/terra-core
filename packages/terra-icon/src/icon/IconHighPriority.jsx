import React from 'react';
import classNames from 'classnames';
import IconBase from '../IconBase';

const SvgIcon = customProps => {
  const attributes = Object.assign({}, customProps);
  attributes.className = classNames("is-static", attributes.className);

  return (
    <IconBase {...attributes}>
      <path d="M0 40h8v8H0v-8zM0 0h8v32H0V0z" ></path>
    </IconBase>
  )
};

SvgIcon.displayName = "IconHighPriority";
SvgIcon.defaultProps = {"className":"is-static","viewBox":"0 0 8 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
