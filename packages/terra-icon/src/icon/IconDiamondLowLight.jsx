/* eslint-disable */
import React from 'react';
import classNames from 'classnames/bind';
import IconBase from '../IconBase';
import styles from '../IconDiamondLowLight.module.scss';

const cx = classNames.bind(styles);

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const iconClassNames = cx([
    'IconDiamondLowLight',
    customProps.className,
  ]);

  return (
    <IconBase className={iconClassNames} {...attributes}>
      <path fill="#C270D7" d="M24.8 47.7l22.9-22.9c.4-.4.4-1.1 0-1.6L24.8.3c-.4-.4-1.1-.4-1.6 0L.3 23.2c-.4.4-.4 1.1 0 1.6l22.9 22.9c.4.4 1.2.4 1.6 0z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconDiamondLowLight";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
