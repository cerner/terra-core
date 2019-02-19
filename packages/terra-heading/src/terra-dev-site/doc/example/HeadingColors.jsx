import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Heading from 'terra-heading/lib/Heading';
import classNames from 'classnames/bind';
import styles from './colors.module.scss';

const cx = classNames.bind(styles);

const HeadingColors = () => (
  <div>
    <Heading level={3} className={cx(['attention'])}>Font Color: Crimson</Heading>
    <Heading level={3} className={cx(['neutral'])}>Font Color: rgb(46,125,50)</Heading>
    <Heading level={3} className={cx(['info'])}>Font Color: #304FFE</Heading>
  </div>
);

export default HeadingColors;
