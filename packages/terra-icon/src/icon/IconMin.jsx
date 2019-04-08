/* eslint-disable */
import React from 'react';
import classNames from 'classnames/bind';
import IconBase from '../IconBase';
import styles from '../IconMin.module.scss';

const cx = classNames.bind(styles);

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const iconClassNames = cx([
    'IconMin',
    customProps.className,
  ]);

  return (
    <IconBase className={iconClassNames} {...attributes}>
      <path d="M27 32V0h-6v32H8.5L24 48l15.5-16z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconMin";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
