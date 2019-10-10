import React from 'react';
import classNames from 'classnames/bind';
import Textarea from '../../../Textarea';
import styles from './common/Textarea.test.module.scss';

const cx = classNames.bind(styles);

const textarea = () => (
  <div className={cx('content-wrapper')}>
    <Textarea id="auto-resizable" cols="2" isAutoResizable defaultValue="Default Value" ariaLabel="label" />
  </div>
);

export default textarea;
