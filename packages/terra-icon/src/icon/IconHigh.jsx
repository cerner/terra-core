/* eslint-disable */
import React from 'react';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import IconBase from '../IconBase';
import styles from '../IconHigh.module.scss';

const cx = classNamesBind.bind(styles);

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const theme = React.useContext(ThemeContext);
  const iconClassNames = classNames(
    cx(
      'IconHigh',
      theme.className,
    ),
    customProps.className,
  );

  return (
    <IconBase {...attributes} className={iconClassNames} >
      <path fill="#B53203" d="M24 2.3 45.7 24 24 45.7 2.3 24 24 2.3M24 0a1.135 1.135 0 0 0-.8.3L.3 23.2a1.215 1.215 0 0 0 0 1.6l22.9 22.9a1.217 1.217 0 0 0 1.6 0l22.9-22.9a1.217 1.217 0 0 0 0-1.6L24.8.3A1.135 1.135 0 0 0 24 0zm0 9L13 20h8v19h6V20h8z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconHigh";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","data-name":"Layer 1","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
