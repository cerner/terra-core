/* eslint-disable */
import React from 'react';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import IconBase from '../IconBase';
import styles from '../IconDiamond.module.scss';

const cx = classNamesBind.bind(styles);

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const theme = React.useContext(ThemeContext);
  const iconClassNames = classNames(
    cx(
      'IconDiamond',
      theme.className,
    ),
    customProps.className,
  );

  return (
    <IconBase {...attributes} className={iconClassNames} >
      <path fill="#78288C" d="m24.8 47.7 22.9-22.9c.4-.4.4-1.1 0-1.6L24.8.3c-.4-.4-1.1-.4-1.6 0L.3 23.2c-.4.4-.4 1.1 0 1.6l22.9 22.9c.4.4 1.2.4 1.6 0z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconDiamond";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
