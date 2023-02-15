import React from 'react';
import IconEdit from 'terra-icon/lib/icon/IconEdit';
import Button, { IconTypes } from 'terra-button';
import classNames from 'classnames/bind';
import styles from './ButtonDocCommon.module.scss';

const cx = classNames.bind(styles);

const ButtonVariant = () => (
  <div>
    <Button text="Action" variant="action" icon={<IconEdit a11yLabel="Edit" />} iconType={IconTypes.INFORMATIVE} className={cx('button')} />
    <Button text="Utility" variant="utility" icon={<IconEdit />} iconType={IconTypes.DECORATIVE} className={cx('button')} />
  </div>
);

export default ButtonVariant;
