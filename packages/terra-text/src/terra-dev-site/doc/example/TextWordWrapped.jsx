import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Text from 'terra-text/lib/Text';
import classNames from 'classnames/bind';
import styles from './TextDocCommon.module.scss';

const cx = classNames.bind(styles);

const TextWordWrapped = () => (
  <div className={cx('text-wrapper')}><Text id="text" isWordWrapped>https://engineering.cerner.com/terra-ui/#/components/terra-text/text/text</Text></div>
);

export default TextWordWrapped;
