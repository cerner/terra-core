import React from 'react';
import classNames from 'classnames/bind';
import Text from '../../../Text';
import styles from './TextTestCommon.module.scss';

const cx = classNames.bind(styles);

const TextLineHeight = () => (
  <div>
    <div className={cx('content-font-size-large')}>
      Parent font size: 100px
      <Text fontSize={16}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ex tellus. Duis eget maximus ante, vitae bibendum libero. Integer.
      </Text>
    </div>
    <div className={cx('content-font-size-small')}>
      Parent font size: 8px
      <Text id="lineHeight" fontSize={16}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ex tellus. Duis eget maximus ante, vitae bibendum libero. Integer.
      </Text>
    </div>
  </div>
);

export default TextLineHeight;
