import React from 'react';
import classNames from 'classnames/bind';
import Status from '../../../Status';
import styles from '../../doc/example/colors.module.scss';

const cx = classNames.bind(styles);

const simpleText = <div className={cx('text-wrapper')}>Sample text</div>;

const StatusNoColor = () => (
  <div>
    <Status id="statusNoColor">{simpleText}</Status>
  </div>
);

export default StatusNoColor;
