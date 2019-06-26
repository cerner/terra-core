import React from 'react';
import IconEdit from 'terra-icon/lib/icon/IconEdit';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Button from 'terra-button/lib/Button';
import classNames from 'classnames/bind';
import styles from './ButtonDocCommon.module.scss';

const cx = classNames.bind(styles);

const Icon = <IconEdit />;

const ButtonIcon = () => (
  <div>
    <Button icon={Icon} text="icon" className={cx('button')} />
    <Button icon={Icon} text="icon" isReversed className={cx('button')} />
    <Button icon={Icon} isIconOnly text="Icon Only Button" className={cx('button')} />
  </div>
);

export default ButtonIcon;
