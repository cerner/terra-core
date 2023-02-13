import React from 'react';
import IconEdit from 'terra-icon/lib/icon/IconEdit';
import Button from 'terra-button/lib/Button';
import classNames from 'classnames/bind';
import styles from './ButtonDocCommon.module.scss';

const cx = classNames.bind(styles);

const InformativeIcon = <IconEdit a11yLabel="Edit Icon" />;
const DecorativeIcon = <IconEdit />;

const ButtonIcon = () => (
  <div>
    <Button icon={InformativeIcon} text="Informative icon" className={cx('button')} />
    <Button icon={DecorativeIcon} text="Decorative icon" isReversed className={cx('button')} />
    <Button icon={DecorativeIcon} isIconOnly text="Decorative Icon Only Button" className={cx('button')} />
    <Button icon={InformativeIcon} isIconOnly text="Informative Icon Only Button" className={cx('button')} />
  </div>
);

export default ButtonIcon;
