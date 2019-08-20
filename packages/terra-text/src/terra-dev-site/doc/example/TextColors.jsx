import React from 'react';
import Text from 'terra-text';
import classNames from 'classnames/bind';
import styles from './colors.module.scss';

const cx = classNames.bind(styles);

const TextColors = () => (
  <div>
    <Text fontSize={18} colorClass={cx(['attention'])}>{'Font Color: \'attention\' class'}</Text>
    <br />
    <Text fontSize={18} colorClass={cx(['success'])}>{'Font Color: \'success\' class'}</Text>
    <br />
    <Text fontSize={18} colorClass={cx(['info'])}>{'Font Color: \'info\' class'}</Text>
  </div>
);

export default TextColors;
