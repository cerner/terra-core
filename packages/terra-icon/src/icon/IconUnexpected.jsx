/* eslint-disable */
import React from 'react';
import classNames from 'classnames/bind';
import IconBase from '../IconBase';
import styles from '../IconUnexpected.module.scss';

const cx = classNames.bind(styles);

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const iconClassNames = cx([
    'IconUnexpected',
    customProps.className,
  ]);

  return (
    <IconBase className={iconClassNames} {...attributes}>
      <path fill="#868A8C" d="M24 2.3L45.7 24 24 45.7 2.3 24 24 2.3M24 0c-.3 0-.6.1-.8.3L.3 23.2c-.4.4-.4 1.1 0 1.6l22.9 22.9c.2.2.5.3.8.3s.6-.1.8-.3l22.9-22.9c.4-.4.4-1.1 0-1.6L24.8.3c-.2-.2-.5-.3-.8-.3zm.9 12h-.2c-1.1 0-2.2.2-2.8.4-2.9.8-5.1 3.1-5.1 6.6h4v-.3c.2-1.6 1.6-2.9 3.2-2.9h.5c1.8 0 3.2 1.4 3.2 3.2 0 1.2-.7 2.3-1.7 2.8-.4.3-1 .6-1.6.9-1.4 1-2.4 2.7-2.4 4.5v.8h4v-1.1c0-.8 1.2-1 2.4-1.8.7-.5 1.5-1 2.2-1.9.8-1 1.5-2.4 1.5-4.5 0-3.3-2.6-6.7-7.2-6.7zM22 36h4v-4h-4v4z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconUnexpected";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
