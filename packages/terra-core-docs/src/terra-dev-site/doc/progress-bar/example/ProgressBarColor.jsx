import React from 'react';
import ProgressBar from 'terra-progress-bar';
import classNames from 'classnames/bind';
import styles from 'terra-progress-bar/lib/colors.module.scss';

const cx = classNames.bind(styles);

const ProgressBarColor = () => (
  <div>
    <ProgressBar value={5} max={10} colorClass={cx(['color-bar-example-1'])} />
    <br />
    <br />
    <ProgressBar value={7.5} max={10} colorClass={cx(['color-bar-example-2'])} />
    <br />
    <br />
    <ProgressBar value={10} max={10} colorClass={cx(['color-bar-example-3'])} />
  </div>
);

export default ProgressBarColor;
