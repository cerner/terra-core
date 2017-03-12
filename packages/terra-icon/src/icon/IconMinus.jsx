import React from 'react';
import classNames from 'classnames';
import IconBase from '../IconBase';

const SvgIcon = customProps => {
  const attributes = Object.assign({}, customProps);
  attributes.className = classNames("is-themeable", attributes.className);

  return (
    <IconBase {...attributes}>
      <path d="M48 27H0v-6h48v6z" ></path>
    </IconBase>
  )
};

SvgIcon.displayName = "IconMinus";
SvgIcon.defaultProps = {"className":"is-themeable","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
