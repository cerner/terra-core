import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Text from 'terra-text/lib/Text';
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
