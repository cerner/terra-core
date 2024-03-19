import React from 'react';
import Button from 'terra-button';
import { IconEdit } from 'terra-icon';
import classNames from 'classnames/bind';
import styles from './ButtonDocCommon.module.scss';

const cx = classNames.bind(styles);

const InformativeIcon = <IconEdit a11yLabel="Edit Icon" />;

const ButtonBlockLeftAligned = () => (
  <>
    <Button text="Neutral Block" isBlock isLeftAligned className={cx('button')} />
    <Button icon={InformativeIcon} isBlock isLeftAligned text="Informative icon" className={cx('button')} />
  </>
);

export default ButtonBlockLeftAligned;
