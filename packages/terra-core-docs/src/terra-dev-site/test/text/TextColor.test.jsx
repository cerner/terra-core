import React from 'react';
import classNames from 'classnames/bind';
import Text from 'terra-text';
import styles from '../../doc/text/example/colors.module.scss';

const cx = classNames.bind(styles);

const TextColor = () => (
  <div>
    <Text id="textColor" colorClass={cx(['info'])}>Color</Text>
  </div>
);

export default TextColor;
