/* eslint-disable */
import React from 'react';
import classNames from 'classnames/bind';
import IconBase from '../IconBase';
import styles from '../IconDoNotDisturb.module.scss';

const cx = classNames.bind(styles);

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const iconClassNames = cx([
    'IconDoNotDisturb',
    customProps.className,
  ]);

  return (
    <IconBase className={iconClassNames} {...attributes}>
      <path d="M42.7 48H5.3C2.4 48 0 45.6 0 42.7V5.3C0 2.4 2.4 0 5.3 0h37.4C45.6 0 48 2.4 48 5.3v37.4c0 2.9-2.4 5.3-5.3 5.3z" fill="#bd0e0d" ></path><path d="M7 21.5h34v5H7v-5z" fill="#fff" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconDoNotDisturb";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
