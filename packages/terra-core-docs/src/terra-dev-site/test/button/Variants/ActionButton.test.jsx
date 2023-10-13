import React from 'react';
import classNames from 'classnames/bind';
import Button from 'terra-button';
import { IconSquareSymbol as IconSquare } from 'terra-icon';
import styles from '../ButtonTestCommon.module.scss';

const cx = classNames.bind(styles);

const ActionButton = () => (
  <div id="action" className={cx('button-wrapper')}>
    <Button id="actionButton" text="Action" icon={<IconSquare />} variant="action" />
    <Button id="actionButtonDisabled" text="Action Disabled" icon={<IconSquare />} variant="action" isDisabled />
  </div>
);

export default ActionButton;
