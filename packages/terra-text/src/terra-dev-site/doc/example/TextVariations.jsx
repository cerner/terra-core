import React from 'react';
import Text from 'terra-text';
import classNames from 'classnames/bind';
import styles from './colors.module.scss';

const cx = classNames.bind(styles);

const TextVariations = () => (
  <div>
    <Text fontSize={18} colorClass={cx(['success'])} isItalic>
Text with color set to
      <code>{'\'success\' class'}</code>
      {' '}
and
      <code>isItalic</code>
    </Text>
    <br />
    <Text fontSize={24} weight={200}>
Text with font-size set to
      <code>24</code>
      {' '}
and weight set to
      <code>200</code>
    </Text>
  </div>
);

export default TextVariations;
