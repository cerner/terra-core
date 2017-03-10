import React from 'react';
import IconBase from '../IconBase';
import classNames from 'classnames';

const SvgIcon = customProps => {
  const attributes = Object.assign({}, customProps);
  attributes.className = classNames("is-themeable", attributes.className);

  return (
    <IconBase {...attributes}>
      <path d="M46 5h-7V2a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2v3H2a2 2 0 0 0-2 2v4.2a17.63 17.63 0 0 0 8.3 14.9l1.5 1a14.59 14.59 0 0 0 12.1 9.8v3.3a13.69 13.69 0 0 0-10.5 7.9h25a13.9 13.9 0 0 0-10.5-7.9v-3.3A14.31 14.31 0 0 0 38 27.1l1.6-1a17.4 17.4 0 0 0 8.3-14.9V7A1.86 1.86 0 0 0 46 5zM3 11.2V8h6v14a3.4 3.4 0 0 0 .1 1A14.5 14.5 0 0 1 3 11.2zm42 0A14.5 14.5 0 0 1 38.9 23c0-.3.1-.7.1-1V8h6z" ></path>
    </IconBase>
  )
};

SvgIcon.displayName = "IconTrophy";
SvgIcon.defaultProps = {"className":"is-themeable","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
