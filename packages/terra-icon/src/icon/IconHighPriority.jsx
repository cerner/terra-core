/* eslint-disable */
import React from 'react';
import classNames from 'classnames/bind';
import IconBase from '../IconBase';
import styles from '../IconHighPriority.module.scss';

const cx = classNames.bind(styles);

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const iconClassNames = cx([
    'IconHighPriority',
    customProps.className,
  ]);

  return (
    <IconBase className={iconClassNames} {...attributes}>
      <path d="M0 40h8v8H0v-8zM0 0h8v32H0V0z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconHighPriority";
SvgIcon.defaultProps = {"viewBox":"0 0 8 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
