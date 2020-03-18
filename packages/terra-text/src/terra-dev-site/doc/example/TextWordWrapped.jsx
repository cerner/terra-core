import React from 'react';
import Text from 'terra-text';
import classNames from 'classnames/bind';
import styles from './TextDocCommon.module.scss';

const cx = classNames.bind(styles);

const TextWordWrapped = () => (
  <div className={cx('text-wrapper')}><Text id="text" isWordWrapped>https://engineering.cerner.com/terra-ui/#/components/terra-text/text/text</Text></div>
);

export default TextWordWrapped;
