import React from 'react';
import classNames from 'classnames/bind';
import Text from 'terra-text';
import styles from '../../doc/text/example/colors.module.scss';

const cx = classNames.bind(styles);

const TextVisualProps = () => (
  <div>
    <Text id="textVisualProps" fontSize={24} colorClass={cx(['info'])} isItalic weight={200}>All Visual Props Set</Text>
  </div>
);

export default TextVisualProps;
