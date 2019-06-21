import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Placeholder from 'terra-doc-template/lib/Placeholder';
import classNames from 'classnames/bind';
import styles from './DocTemplateDocCommon.module.scss';

const cx = classNames.bind(styles);

const placeholder = () => (
  <div className={cx('placeholder-light')}>
    <Placeholder title="Light Placeholder" variant="light" />
  </div>
);

export default placeholder;
