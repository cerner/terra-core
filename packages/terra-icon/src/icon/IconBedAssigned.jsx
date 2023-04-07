/* eslint-disable */
import React from 'react';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import IconBase from '../IconBase';
import styles from '../IconBedAssigned.module.scss';

const cx = classNamesBind.bind(styles);

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const theme = React.useContext(ThemeContext);
  const iconClassNames = classNames(
    cx(
      'IconBedAssigned',
      theme.className,
    ),
    customProps.className,
  );

  return (
    <IconBase {...attributes} className={iconClassNames} >
      <circle fill="#78C346" cx="36" cy="36" r="12" ></circle><path fill="#FFF" d="M34.1 42.4l-6.5-6.5 2.1-2.1 4.4 4.3 8.2-8.1 2.1 2.1z" ></path><path d="M38 18.5H16.6v-7.1h14.2c4-.1 7.2 3.1 7.2 7.1zm-27.3 0c2 0 3.6-1.6 3.6-3.6s-1.6-3.6-3.6-3.6-3.6 1.6-3.6 3.6 1.6 3.6 3.6 3.6zM36 22c.7 0 1.3.1 2 .2v-1.3H4.8V9c0-1.3-1.1-2.4-2.4-2.4S0 7.7 0 9v23h4.8v-6.3h21.9c2.4-2.3 5.7-3.7 9.3-3.7z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconBedAssigned";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */