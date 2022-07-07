import React from 'react';
import IconSquare from 'terra-icon/lib/icon/IconSquareSymbol';
import classNames from 'classnames/bind';
import { IconButton } from 'terra-button';
import styles from './ButtonTestCommon.module.scss';

const cx = classNames.bind(styles);

const iconSquare = <IconSquare a11yLabel="Square" />;

const IconNeutralButton = () => <IconButton id="iconNeutralButton" text="Button with Icon" icon={iconSquare} iconType="informative" />;
const IconOnlyButton = () => <IconButton id="iconOnlyButton" text="iconOnlyButton" isIconOnly icon={iconSquare} iconType="informative" />;
const IconReversedButton = () => <IconButton id="iconReversedButton" text="Button with Icon and reversed" icon={iconSquare} iconType="informative" isReversed />;

export default () => (
  <div>
    <IconNeutralButton />
    <div className={cx('spacing')} />
    <IconOnlyButton />
    <div className={cx('spacing')} />
    <IconReversedButton />
  </div>
);
