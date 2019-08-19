import React from 'react';
import classNames from 'classnames/bind';
import Placeholder from '../../../Placeholder';
import styles from './DocTemplateTestCommon.module.scss';

const cx = classNames.bind(styles);

const placeholder = () => (
  <div className={cx('placeholder-default')}>
    <Placeholder title="Default Placeholder" />
  </div>
);

export default placeholder;
