import React from 'react';
import classNames from 'classnames/bind';
import styles from 'terra-progress-bar/lib/colors.module.scss';
import ProgressBar from 'terra-progress-bar';

const cx = classNames.bind(styles);

export default () => (
  <div>
    <ProgressBar value={8} max={10} colorClass={cx(['customized-color-bar-example-2'])} />
  </div>
);
