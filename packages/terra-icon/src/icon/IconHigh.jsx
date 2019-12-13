/* eslint-disable */
import React from 'react';
import classNames from 'classnames/bind';
import IconBase from '../IconBase';
import styles from '../IconHigh.module.scss';

const cx = classNames.bind(styles);

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const iconClassNames = cx([
    'IconHigh',
    customProps.className,
  ]);

  return (
    <IconBase className={iconClassNames} {...attributes}>
      <path d="M24 2.3L45.7 24 24 45.7 2.3 24 24 2.3M24 0a1.135 1.135 0 00-.8.3L.3 23.2a1.215 1.215 0 000 1.6l22.9 22.9a1.217 1.217 0 001.6 0l22.9-22.9a1.217 1.217 0 000-1.6L24.8.3A1.135 1.135 0 0024 0zm0 9L13 20h8v19h6V20h8z" fill="#da3b03" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconHigh";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
/* eslint-enable */
