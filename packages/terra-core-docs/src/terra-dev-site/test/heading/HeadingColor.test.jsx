import React from 'react';
import classNames from 'classnames/bind';
import Heading from 'terra-heading';
import styles from 'terra-heading/lib/colors.module.scss';

const cx = classNames.bind(styles);

const HeadingColor = () => (
  <div>
    <Heading id="heading-color" level={1} colorClass={cx(['info'])}>Color</Heading>
  </div>
);

export default HeadingColor;
