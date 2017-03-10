import React from 'react';
import IconBase from '../IconBase';
import classNames from 'classnames';

const SvgIcon = customProps => {
  const attributes = Object.assign({}, customProps);
  attributes.className = classNames("is-themeable", attributes.className);

  return (
    <IconBase {...attributes}>
      <path d="M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z" ></path>
    </IconBase>
  )
};

SvgIcon.displayName = "IconPrevious";
SvgIcon.defaultProps = {"className":"is-themeable","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1","isBidi":true};

export default SvgIcon;
