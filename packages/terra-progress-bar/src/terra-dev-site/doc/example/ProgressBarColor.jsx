import React from 'react';
import ProgressBar from 'terra-progress-bar';
import classNames from 'classnames/bind';
import styles from './colors.module.scss';

// eslint-disable-next-line import/order
import StylesDoc from 'terra-progress-bar/docs/colors.doc.scss?dev-site-codeblock';

const cx = classNames.bind(styles);

const ProgressBarColor = () => (
  <div>
    <StylesDoc />
    <ProgressBar valueText="5%" value={5} max={10} colorClass={cx(['color-bar-example-1'])} />
    <br />
    <br />
    <ProgressBar valueText="7.5%" value={7.5} max={10} colorClass={cx(['color-bar-example-2'])} />
    <br />
    <br />
    <ProgressBar valueText="10%" value={10} max={10} colorClass={cx(['color-bar-example-3'])} />
  </div>
);

export default ProgressBarColor;
