import React from 'react';
import IconSquare from 'terra-icon/lib/icon/IconSquareSymbol';
import classNames from 'classnames/bind';
import Button from '../../../Button';
import styles from './ButtonTestCommon.module.scss';

const cx = classNames.bind(styles);

const IconNeutralButton = () => <Button id="iconNeutralButton" text="Button with Icon" icon={<IconSquare />} />;
const IconOnlyButton = () => <Button id="iconOnlyButton" text="iconOnlyButton" isIconOnly icon={<IconSquare />} />;
const IconReversedButton = () => <Button id="iconReversedButton" text="Button with Icon and reversed" icon={<IconSquare />} isReversed />;

export default () => (
  <div>
    <IconNeutralButton />
    <div className={cx('spacing')} />
    <IconOnlyButton />
    <div className={cx('spacing')} />
    <IconReversedButton />
  </div>
);
