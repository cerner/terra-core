import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Button from 'terra-button/lib/Button';
import classNames from 'classnames/bind';
import styles from './ButtonDocCommon.module.scss';

const cx = classNames.bind(styles);

const ButtonAnchor = () => (
  <Button href="#" text="I am rendered with an anchor tag" className={cx('button')} />
);

export default ButtonAnchor;
