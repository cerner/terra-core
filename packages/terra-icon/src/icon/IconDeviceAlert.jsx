/* eslint-disable */
import React from 'react';
import classNames from 'classnames/bind';
import IconBase from '../IconBase';
import styles from '../IconDeviceAlert.module.scss';

const cx = classNames.bind(styles);

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const iconClassNames = cx([
    'IconDeviceAlert',
    customProps.className,
  ]);

  return (
    <IconBase className={iconClassNames} {...attributes}>
      <path d="M28 30.2V2c0-1.1-.9-2-2-2H5C3.9 0 3 .9 3 2v34c0 1.1.9 2 2 2h18.5l4.5-7.8zM12.5 3.9c0-.5.4-.9.9-.9h4.1c.5 0 .9.4.9.9V4c0 .5-.4.9-.9.9h-4.1c-.5 0-.9-.4-.9-1zM6 8h19v20H6V8zm9.5 27c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" ></path><path fill="#E50000" d="M21.6 48c-.5 0-.8-.4-.5-.9l11.4-19.8c.3-.5.7-.5 1 0l11.4 19.8c.3.5 0 .9-.5.9H21.6z" ></path><path fill="#FFF" d="M32 46h2v-2h-2v2zm0-13v9h2v-9h-2z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconDeviceAlert";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
