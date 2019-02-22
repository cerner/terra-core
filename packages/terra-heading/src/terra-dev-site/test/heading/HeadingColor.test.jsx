import React from 'react';

import classNames from 'classnames/bind';
import styles from '../../doc/example/colors.module.scss';

import Heading from '../../../Heading';

const cx = classNames.bind(styles);

const HeadingColor = () => (
  <div>
    <Heading id="heading-color" level={1} colorClass={cx(['info'])}>Color</Heading>
  </div>
);

export default HeadingColor;
