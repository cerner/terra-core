import React from 'react';
import classNames from 'classnames/bind';
import AnchorButton from 'terra-button/lib/variants/_AnchorButton';
import styles from './ButtonTestCommon.module.scss';

const cx = classNames.bind(styles);

const ButtonAnchor = () => <AnchorButton href="#" text="I am rendered with an anchor tag" className={cx('button')} />;

export default () => (
  <div>
    <ButtonAnchor />
    <div className={cx('spacing')} />
  </div>
);
