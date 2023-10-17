import React from 'react';
import ProgressBar from 'terra-progress-bar';
import classNames from 'classnames/bind';
import styles from 'terra-progress-bar/lib/colors.module.scss';

const cx = classNames.bind(styles);

const ProgressBarGradient = () => (
  <div>
    <ProgressBar value={5} max={10} colorClass={cx(['two-colors-bar-example-1'])} />
    <br />
    <br />
    <ProgressBar value={3} max={10} colorClass={cx(['two-colors-bar-example-2'])} />
    <br />
    <br />
    <ProgressBar value={8} max={10} colorClass={cx(['two-colors-bar-example-3'])} />
  </div>
);

export default ProgressBarGradient;
