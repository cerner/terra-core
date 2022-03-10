/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import classNames from 'classnames/bind';
import IconManufacturer from 'terra-icon/lib/icon/IconManufacturer';

import styles from './IconDocCommon.module.scss';

const cx = classNames.bind(styles);

const DecorativeIconExample = () => (
  <>
    <div className={cx('example')}>
      <IconManufacturer title="" />
      &nbsp;
      Manufactured by 2800 Rock Creek Pkwy Kansas City, MO 64117
    </div>
  </>
);

export default DecorativeIconExample;
