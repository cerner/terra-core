/* eslint-disable */
import React from 'react';
import classNames from 'classnames/bind';
import IconBase from '../IconBase';
import styles from '../IconHide.module.scss';

const cx = classNames.bind(styles);

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const iconClassNames = cx([
    'IconHide',
    customProps.className,
  ]);

  return (
    <IconBase className={iconClassNames} {...attributes}>
      <path d="M33.2 24c0 5.1-4.1 9.2-9.2 9.2s-9.2-4.1-9.2-9.2 4.1-9.2 9.2-9.2 9.2 4.1 9.2 9.2zM24 12.2c-8.5 0-16.5 4.6-20.6 11.8C7.5 31.2 15.5 35.7 24 35.7S40.5 31.2 44.6 24C40.5 16.8 32.5 12.2 24 12.2m0-3c10.6 0 19.7 6 24 14.8-4.3 8.7-13.4 14.8-24 14.8S4.3 32.7 0 24C4.3 15.3 13.4 9.2 24 9.2z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconHide";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
