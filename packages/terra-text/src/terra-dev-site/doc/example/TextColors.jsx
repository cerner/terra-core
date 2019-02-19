import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Text from 'terra-text/lib/Text';
import classNames from 'classnames/bind';
import styles from './colors.module.scss';

const cx = classNames.bind(styles);

const TextColors = () => (
  <div>
    <Text fontSize={18} className={cx(['attention'])}>Font Color: Crimson</Text>
    <br />
    <Text fontSize={18} className={cx(['neutral'])}>Font Color: rgb(46,125,50)</Text>
    <br />
    <Text fontSize={18} className={cx(['info'])}>Font Color: #304FFE</Text>
  </div>
);

export default TextColors;
