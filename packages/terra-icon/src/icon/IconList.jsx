import React from 'react';
import classNames from 'classnames';
import IconBase from '../IconBase';

const SvgIcon = customProps => {
  const attributes = Object.assign({}, customProps);
  attributes.className = classNames("is-themeable", attributes.className);

  return (
    <IconBase {...attributes}>
      <path d="M0 21h48v6H0zM0 4h48v6H0zm0 34h48v6H0z" ></path>
    </IconBase>
  )
};

SvgIcon.displayName = "IconList";
SvgIcon.defaultProps = {"className":"is-themeable","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
