import React from 'react';
import IconEdit from 'terra-icon/lib/icon/IconEdit';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Button from 'terra-button/lib/Button';
import classNames from 'classnames/bind';
import styles from './ButtonDocCommon.module.scss';

const cx = classNames.bind(styles);

const ButtonDisabled = () => (
  <div>
    <Button text="Disabled Button" isDisabled className={cx('button')} />
    <Button text="Disabled Emphasis" variant="emphasis" isDisabled className={cx('button')} />
    <Button text="Disabled Ghost" variant="ghost" isDisabled className={cx('button')} />
    <Button text="Disabled De-emphasis" variant="de-emphasis" isDisabled className={cx('button')} />
    <Button text="Disabled Action" variant="action" isDisabled icon={<IconEdit />} className={cx('button')} />
    <Button text="Disabled Utility" variant="utility" isDisabled icon={<IconEdit />} className={cx('button')} />
  </div>
);

export default ButtonDisabled;
