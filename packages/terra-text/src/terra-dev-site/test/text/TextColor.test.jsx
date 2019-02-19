import React from 'react';

import classNames from 'classnames/bind';
import Text from '../../../Text';
import styles from '../../doc/example/colors.module.scss';

const cx = classNames.bind(styles);

const TextColor = () => (
  <div>
    <Text id="textColor" className={cx(['info'])}>Color</Text>
  </div>
);

export default TextColor;
