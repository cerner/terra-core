import React from 'react';
import IconBase from '../IconBase';
import classNames from 'classnames';

const SvgIcon = customProps => {
  const attributes = Object.assign({}, customProps);
  attributes.className = classNames("is-themeable", attributes.className);

  return (
    <IconBase {...attributes}>
      <path d="M24 37.7L0 14.2l3.8-3.9L24 30l20.2-19.7 3.8 3.9z" ></path>
    </IconBase>
  )
};

SvgIcon.displayName = "IconChevronDown";
SvgIcon.defaultProps = {"className":"is-themeable","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1","isBidi":true};

export default SvgIcon;
