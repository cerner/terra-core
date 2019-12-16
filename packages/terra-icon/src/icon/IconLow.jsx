/* eslint-disable */
import React from 'react';
import classNames from 'classnames/bind';
import IconBase from '../IconBase';
import styles from '../IconLow.module.scss';

const cx = classNames.bind(styles);

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const iconClassNames = cx([
    'IconLow',
    customProps.className,
  ]);

  return (
    <IconBase className={iconClassNames} {...attributes}>
      <script ></script><path fill="#0053E6" d="M24 2.3L45.7 24 24 45.7 2.3 24 24 2.3M24 0c-.3 0-.6.1-.8.3L.3 23.2c-.4.4-.4 1.2 0 1.6l22.9 22.9c.2.2.5.3.8.3s.6-.1.8-.3l22.9-22.9c.4-.4.4-1.1 0-1.6L24.8.3c-.2-.2-.5-.3-.8-.3zm0 39l11-11h-8V9h-6v19h-8l11 11z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconLow";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
