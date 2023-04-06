import React from 'react';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import styles from './ButtonDocCommon.module.scss';

const cx = classNames.bind(styles);

const ButtonAnchor = () => (
  <Button href="https://en.wikipedia.org/wiki/Allergy" text="Learn More about Allergies" className={cx('button')} />
);

export default ButtonAnchor;
