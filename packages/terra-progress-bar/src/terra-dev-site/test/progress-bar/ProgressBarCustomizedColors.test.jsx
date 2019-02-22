import React from 'react';
import classNames from 'classnames/bind';
import ProgressBar from '../../../ProgressBar';
import styles from '../../doc/example/colors.module.scss';

const cx = classNames.bind(styles);

export default () => (
  <div>
    <ProgressBar valueText="8%" value={8} max={10} colorClass={cx(['customized-color-bar-example-2'])} />
  </div>
);
