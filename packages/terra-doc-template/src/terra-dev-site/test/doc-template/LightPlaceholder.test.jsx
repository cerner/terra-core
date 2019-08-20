import React from 'react';
import classNames from 'classnames/bind';
import Placeholder from '../../../Placeholder';
import styles from './DocTemplateTestCommon.module.scss';

const cx = classNames.bind(styles);

const placeholder = () => (
  <div className={cx('placeholder-light')}>
    <Placeholder title="Light Placeholder" variant="light" />
  </div>
);

export default placeholder;
