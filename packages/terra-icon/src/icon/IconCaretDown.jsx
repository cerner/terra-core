import React from 'react';
import IconBase from '../IconBase';
import classNames from 'classnames';

const SvgIcon = customProps => {
  const attributes = Object.assign({}, customProps);
  attributes.className = classNames("is-themeable", attributes.className);

  return (
    <IconBase {...attributes}>
      <path d="M48 12L24 36 0 12h48z" ></path>
    </IconBase>
  )
};

SvgIcon.displayName = "IconCaretDown";
SvgIcon.defaultProps = {"className":"is-themeable","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","isBidi":true};

export default SvgIcon;
