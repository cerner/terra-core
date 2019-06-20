import React from 'react';
import classNames from 'classnames/bind';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Placeholder from '../../../Placeholder';
import styles from './DocTemplateTestCommon.scss';

const cx = classNames.bind(styles);

const placeholder = () => (
  <div className={cx('placeholder-light')}>
    <Placeholder title="Light Placeholder" variant="light" />
  </div>
);

export default placeholder;
