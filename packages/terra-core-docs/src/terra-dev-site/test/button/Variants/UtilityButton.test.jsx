import React from 'react';
import classNames from 'classnames/bind';
import Button from 'terra-button';
import { IconSquareSymbol as IconSquare } from 'terra-icon';
import styles from '../ButtonTestCommon.module.scss';

const cx = classNames.bind(styles);

const UtilityButton = () => (
  <div id="utility" className={cx('button-wrapper')}>
    <Button id="utilityButton" text="Utility" icon={<IconSquare />} variant="utility" />
    <Button id="utilityButtonDisabled" text="Utility Disabled" icon={<IconSquare />} variant="utility" isDisabled />
  </div>
);

export default UtilityButton;
