/* eslint-disable */
import React from 'react';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import IconBaseDec from '../../IconBaseDec';
import styles from '../../IconRollup.module.scss';

const cx = classNamesBind.bind(styles);

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const theme = React.useContext(ThemeContext);
  const iconClassNames = classNames(
    cx(
      'IconRollup',
      theme.className,
    ),
    customProps.className,
  );

  return (
    <IconBaseDec {...attributes} className={iconClassNames} >
      <path d="M18.6 24c0-3 2.4-5.4 5.4-5.4s5.4 2.4 5.4 5.4-2.4 5.4-5.4 5.4c-3 0-5.4-2.4-5.4-5.4zm0-18.6C18.6 2.4 21 0 24 0c3 0 5.4 2.4 5.4 5.4 0 3-2.4 5.4-5.4 5.4-3 0-5.4-2.4-5.4-5.4zm0 37.2c0-3 2.4-5.4 5.4-5.4s5.4 2.4 5.4 5.4c0 3-2.4 5.4-5.4 5.4-3 0-5.4-2.4-5.4-5.4z" ></path>
    </IconBaseDec>
  );
};

SvgIcon.displayName = "IconRollupDec";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
