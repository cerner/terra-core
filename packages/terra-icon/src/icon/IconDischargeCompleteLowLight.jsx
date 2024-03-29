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
      <path fill="#6F7476" d="M21 35.6c.2-6 3.8-11.1 9-13.3V0H6v33h10v4.2l5-1.6zm-1.5-15.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5c-.1.8-.7 1.5-1.5 1.5zM9 30V3h11.9L16 4.6V30H9z" ></path><path fill="#427C1F" d="M36 24c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12z" ></path><path fill="#B1B5B6" d="m34.1 42.4-6.5-6.5 2.1-2.1 4.4 4.3 8.2-8.1 2.1 2.1z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconDischargeCompleteLowLight";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
