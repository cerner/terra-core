/* eslint-disable */
import React from 'react';
import classNames from 'classnames';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const iconClassNames = classNames(
    customProps.className,
  );

  return (
    <IconBase {...attributes} className={iconClassNames} >
      <path d="M27 11v10h10v6H27v11h-6V27H11v-6h10V11h6zm20.7 13.8L24.8 47.7c-.4.4-1.1.4-1.6 0L.3 24.8c-.4-.4-.4-1.1 0-1.6L23.2.3c.2-.2.5-.3.8-.3.3 0 .6.1.8.3l22.9 22.9c.4.4.4 1.2 0 1.6zm-3.5-.8L24 3.8 3.8 24 24 44.2 44.2 24z" fill="#fb4c4c" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconStatusPositiveLowLight";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
