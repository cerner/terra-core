import React from 'react';
import IconEdit from 'terra-icon/lib/icon/IconEdit';
import { IconButton, IconTypes } from 'terra-button';
import classNames from 'classnames/bind';
import styles from './ButtonDocCommon.module.scss';

const cx = classNames.bind(styles);

const ButtonVariant = () => (
  <div>
    <IconButton text="Action" variant="action" icon={<IconEdit a11yLabel="Edit" />} iconType={IconTypes.INFORMATIVE} className={cx('button')} />
    <IconButton text="Utility" variant="utility" icon={<IconEdit />} iconType={IconTypes.DECORATIVE} className={cx('button')} />
  </div>
);

export default ButtonVariant;
