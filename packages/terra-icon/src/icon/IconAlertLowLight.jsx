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
      <path fill="#F94E4E" d="M1.2 45c-1.1 0-1.6-.8-1-1.7L23 3.7c.5-1 1.4-1 2 0l22.8 39.6c.5 1 .1 1.7-1 1.7H1.2z" ></path><path fill="#B1B5B6" d="M21.5 36.7h5V42h-5v-5.3zm0-22.7h5v17.3h-5V14z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconAlertLowLight";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
