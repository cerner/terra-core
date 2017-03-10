import React from 'react';
import IconBase from '../IconBase';
import classNames from 'classnames';

const SvgIcon = customProps => {
  const attributes = Object.assign({}, customProps);
  attributes.className = classNames("is-themeable", attributes.className);

  return (
    <IconBase {...attributes}>
      <path d="M24 18.6a5.4 5.4 0 1 1-5.4 5.4 5.38 5.38 0 0 1 5.4-5.4zm18.6 0a5.4 5.4 0 1 1-5.4 5.4 5.38 5.38 0 0 1 5.4-5.4zm-37.2 0A5.4 5.4 0 1 1 0 24a5.38 5.38 0 0 1 5.4-5.4z" ></path>
    </IconBase>
  )
};

SvgIcon.displayName = "IconEllipses";
SvgIcon.defaultProps = {"className":"is-themeable","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
