/* eslint-disable */
import React from 'react';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import IconBase from '../IconBase';
import styles from '../IconScheduled.module.scss';

const cx = classNamesBind.bind(styles);

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const theme = React.useContext(ThemeContext);
  const iconClassNames = classNames(
    cx(
      'IconScheduled',
      theme.className,
    ),
    customProps.className,
  );

  return (
    <IconBase {...attributes} className={iconClassNames} >
      <path d="M31 5V1.8c0-1-.8-1.8-1.8-1.8h-1.5c-1 0-1.8.8-1.8 1.8V5H11V1.8c0-1-.8-1.8-1.8-1.8H7.8C6.8 0 6 .8 6 1.8V5H2v33h19.1c-.1-.7-.1-1.3-.1-2v-1H5V17h27v4.6c1-.3 2-.4 3-.5V5h-4z" ></path><path fill="#78C346" d="M36 24c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z" ></path><path fill="#FFF" d="m34.1 42.4-6.5-6.5 2.1-2.1 4.4 4.3 8.2-8.1 2.1 2.1-10.3 10.3z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconScheduled";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
