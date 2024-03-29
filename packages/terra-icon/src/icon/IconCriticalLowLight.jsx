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
      <path fill="#F94E4E" d="M47.7 23.2 24.8.3c-.4-.4-1.1-.4-1.6 0L.3 23.2c-.4.4-.4 1.1 0 1.6l22.9 22.9c.4.4 1.1.4 1.6 0l22.9-22.9c.4-.4.4-1.2 0-1.6z" ></path><path fill="#B1B5B6" d="M27 39h-6v-6h6v6zm0-11h-6V8h6v20z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconCriticalLowLight";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
