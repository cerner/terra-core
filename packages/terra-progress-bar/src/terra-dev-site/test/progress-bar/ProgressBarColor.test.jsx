import React from 'react';
import classNames from 'classnames/bind';
import ProgressBar from '../../../ProgressBar';
import styles from '../../doc/example/colors.module.scss';

const cx = classNames.bind(styles);

const ProgressBarColor = () => (
  <div>
    <ProgressBar id="progressbarWithNamedColor" valueText="5%" value={5} max={10} colorClass={cx(['color-bar-example-1'])} />
    <br />
    <br />
    <ProgressBar id="progressbarWithHexColor" valueText="7.5%" value={7.5} max={10} colorClass={cx(['color-bar-example-2'])} />
    <br />
    <br />
    <ProgressBar id="progressbarWithRGBColor" valueText="10%" value={10} max={10} colorClass={cx(['color-bar-example-3'])} />
  </div>
);

export default ProgressBarColor;
