import React from 'react';
import classNames from 'classnames/bind';

import Text from '../../../Text';
import styles from './TextTestCommon.module.scss';

const cx = classNames.bind(styles);

export default () => (<div className={cx('text-wrapper')}><Text id="text" isWordWrapped>https://engineering.cerner.com/terra-ui/#/components/terra-text/text/text</Text></div>);
