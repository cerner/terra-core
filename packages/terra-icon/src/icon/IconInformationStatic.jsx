/* eslint-disable */
import React from 'react';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import IconBase from '../IconBase';
import styles from '../IconInformationStatic.module.scss';

const cx = classNamesBind.bind(styles);

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const theme = React.useContext(ThemeContext);
  const iconClassNames = classNames(
    cx(
      'IconInformationStatic',
      theme.className,
    ),
    customProps.className,
  );

  return (
    <IconBase {...attributes} className={iconClassNames} >
      <path d="M24 2c12.2 0 22 9.8 22 22s-9.8 22-22 22S2 36.2 2 24C2 11.9 11.9 2 24 2m0-2C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24C48 10.8 37.3 0 24.1 0H24z" fill="#007cc3" ></path><g fill="#007cc3" ><path d="M24.096 32.724c.677-1.824 6.343-11.016 2.428-13.546-2.186-1.413-5.229-.502-7.557 1.164l-.158 1.587c1.374-.502 2.782-.502 3.205.694 1.028 2.909-2.491 8.003-3.453 10.67-2.61 7.236 3.655 8.073 8.125 5.091l.171-1.717c-2.432.711-4.167-.162-2.761-3.942z" ></path><circle cx="26.52" cy="11.534" r="3.534" ></circle></g>
    </IconBase>
  );
};

SvgIcon.displayName = "IconInformationStatic";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
