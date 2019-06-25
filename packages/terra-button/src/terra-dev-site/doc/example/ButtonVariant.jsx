import React from 'react';
import IconEdit from 'terra-icon/lib/icon/IconEdit';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Button from 'terra-button/lib/Button';
import classNames from 'classnames/bind';
import styles from './ButtonDocCommon.module.scss';

const cx = classNames.bind(styles);

const ButtonVariant = () => (
  <div>
    <Button text="Neutral" className={cx('button')} />
    <Button text="Emphasis" variant="emphasis" className={cx('button')} />
    <Button text="Ghost" variant="ghost" className={cx('button')} />
    <Button text="De-emphasis" variant="de-emphasis" className={cx('button')} />
    <Button text="Action" variant="action" icon={<IconEdit />} className={cx('button')} />
    <Button text="Utility" variant="utility" icon={<IconEdit />} className={cx('button')} />
  </div>
);

export default ButtonVariant;
