/* eslint-disable */
import React from 'react';
import classNames from 'classnames/bind';
import IconBase from '../IconBase';
import styles from '../IconWarning.module.scss';

const cx = classNames.bind(styles);

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const iconClassNames = cx([
    'IconWarning',
    customProps.className,
  ]);

  return (
    <IconBase className={iconClassNames} {...attributes}>
      <path fill="#FFC20A" d="M1.2 45c-1.1 0-1.6-.8-1-1.7L23 3.7c.5-1 1.4-1 2 0l22.8 39.6c.5 1 .1 1.7-1 1.7H1.2z" ></path><path fill="#1C1F21" d="M47.7 43.3L25 3.7c-.3-.5-.6-.7-1-.7s-.7.2-1 .7L.2 43.3c-.5 1-.1 1.7 1 1.7h45.5c1.1 0 1.6-.8 1-1.7zm-45.9.2L24 5l22.2 38.5H1.8zm19.7-6.8h5V42h-5v-5.3zm0-22.7h5v17.3h-5V14z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconWarning";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
