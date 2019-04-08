/* eslint-disable */
import React from 'react';
import classNames from 'classnames/bind';
import IconBase from '../IconBase';
import styles from '../IconRollup.module.scss';

const cx = classNames.bind(styles);

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const iconClassNames = cx([
    'IconRollup',
    customProps.className,
  ]);

  return (
    <IconBase className={iconClassNames} {...attributes}>
      <path d="M18.6 24c0-3 2.4-5.4 5.4-5.4s5.4 2.4 5.4 5.4-2.4 5.4-5.4 5.4c-3 0-5.4-2.4-5.4-5.4zm0-18.6C18.6 2.4 21 0 24 0c3 0 5.4 2.4 5.4 5.4 0 3-2.4 5.4-5.4 5.4-3 0-5.4-2.4-5.4-5.4zm0 37.2c0-3 2.4-5.4 5.4-5.4s5.4 2.4 5.4 5.4c0 3-2.4 5.4-5.4 5.4-3 0-5.4-2.4-5.4-5.4z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconRollup";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
