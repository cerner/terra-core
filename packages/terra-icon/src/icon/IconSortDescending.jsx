import React from 'react';
import IconBase from '../IconBase';
import classNames from 'classnames';

const SvgIcon = customProps => {
  const attributes = Object.assign({}, customProps);
  attributes.className = classNames("is-themeable", attributes.className);

  return (
    <IconBase {...attributes}>
      <path d="M14 0H8v37H0l11 11 11-11h-8zm11 8h23v6H25zm5 13h18v6H30zm5 13h13v6H35z" ></path>
    </IconBase>
  )
};

SvgIcon.displayName = "IconSortDescending";
SvgIcon.defaultProps = {"className":"is-themeable","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1","isBidi":true};

export default SvgIcon;
