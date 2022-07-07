import React from 'react';
import IconEdit from 'terra-icon/lib/icon/IconEdit';
import IconAudio from 'terra-icon/lib/icon/decorative/IconAudio';
import { IconButton, IconTypes } from 'terra-button';
import classNames from 'classnames/bind';
import styles from './ButtonDocCommon.module.scss';

const cx = classNames.bind(styles);

const Icon = <IconEdit a11yLabel="Edit Icon" />;
const DecorativeIcon = <IconAudio />;

const ButtonIcon = () => (
  <div>
    <IconButton icon={Icon} text="icon" iconType={IconTypes.INFORMATIVE} className={cx('button')} />
    <IconButton icon={Icon} text="icon" iconType="informative" isReversed className={cx('button')} />
    <IconButton icon={DecorativeIcon} isIconOnly iconType={IconTypes.INFORMATIVE} text="Icon Only Button" className={cx('button')} />
  </div>
);

export default ButtonIcon;
