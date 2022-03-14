/* eslint-disable */
import React from 'react';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import IconBaseDec from '../IconBaseDec';
import styles from '../IconMin.module.scss';

const cx = classNamesBind.bind(styles);

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const theme = React.useContext(ThemeContext);
  const iconClassNames = classNames(
    cx(
      'IconMin',
      theme.className,
    ),
    customProps.className,
  );

  return (
    <IconBaseDec {...attributes} className={iconClassNames} >
      <path d="M27 32V0h-6v32H8.5L24 48l15.5-16z" ></path>
    </IconBaseDec>
  );
};

SvgIcon.displayName = "IconMinDec";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
