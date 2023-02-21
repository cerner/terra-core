/* eslint-disable */
import React from 'react';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import IconBase from '../IconBase';
import styles from '../IconHelpStatic.module.scss';

const cx = classNamesBind.bind(styles);

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const theme = React.useContext(ThemeContext);
  const iconClassNames = classNames(
    cx(
      'IconHelpStatic',
      theme.className,
    ),
    customProps.className,
  );

  return (
    <IconBase {...attributes} className={iconClassNames} >
      <path d="M24 2c12.2 0 22 9.8 22 22s-9.8 22-22 22S2 36.2 2 24C2 11.9 11.9 2 24 2m0-2C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24C48 10.8 37.3 0 24.1 0H24z" fill="#007cc3" ></path><path d="M24.438 12h-.172c-1.141 0-2.207.209-2.77.358-2.906.769-5.056 3.142-5.11 6.642h4.015c.007-.5.014-.25.019-.307.232-1.567 1.595-2.873 3.226-2.873l.484-.005a3.191 3.191 0 011.488 6.02c-.42.282-1.01.562-1.613.935v.013a5.242 5.242 0 00-2.5 4.466v.75h4v-1.078c0-.764 1.199-.989 2.385-1.796.681-.463 1.518-1.041 2.221-1.912.808-1.001 1.504-2.392 1.504-4.463 0-3.318-2.641-6.75-7.177-6.75z" fill="#007cc3" ></path><path fill="#007cc3" d="M21.5 32h4v4h-4z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconHelpStatic";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
