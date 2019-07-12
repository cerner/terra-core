/* eslint-disable */
import React from 'react';
import classNames from 'classnames/bind';
import IconBase from '../IconBase';
import styles from '../IconOutOfNetwork.module.scss';

const cx = classNames.bind(styles);

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const iconClassNames = cx([
    'IconOutOfNetwork',
    customProps.className,
  ]);

  return (
    <IconBase className={iconClassNames} {...attributes}>
      <path d="M32.58 21.41a70.976 70.976 0 0 0 1.99-15.36C24.89 6.94 17.75 0 17.75 0S10.61 6.94.93 6.05c0 0 .12 15.7 5.21 22.89C9.05 33.06 17.75 38 17.75 38s1.4-.8 3.25-2c.01-6.96 4.81-13 11.58-14.59z" ></path><path d="M36 24c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm-9 12c-.01-4.96 4.01-8.99 8.97-9 1.88 0 3.71.58 5.23 1.67L28.67 41.21A8.93 8.93 0 0 1 27 36zm9 9a8.93 8.93 0 0 1-5.21-1.67L43.32 30.8c2.88 4.04 1.95 9.65-2.09 12.53A8.968 8.968 0 0 1 36 45z" fill="#e50001" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconOutOfNetwork";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
