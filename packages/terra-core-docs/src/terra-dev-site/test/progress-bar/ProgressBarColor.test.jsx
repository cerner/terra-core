import React from 'react';
import classNames from 'classnames/bind';
import ProgressBar from 'terra-progress-bar';
import styles from 'terra-progress-bar/lib/colors.module.scss';

const cx = classNames.bind(styles);

const ProgressBarColor = () => (
  <div>
    <ProgressBar id="progressbarWithNamedColor" value={5} max={10} colorClass={cx(['color-bar-example-1'])} />
    <br />
    <br />
    <ProgressBar id="progressbarWithHexColor" value={7.5} max={10} colorClass={cx(['color-bar-example-2'])} />
    <br />
    <br />
    <ProgressBar id="progressbarWithRGBColor" value={10} max={10} colorClass={cx(['color-bar-example-3'])} />
  </div>
);

export default ProgressBarColor;
