import React from 'react';
import IconSquare from 'terra-icon/lib/icon/IconSquareSymbol';
import classNames from 'classnames/bind';
import Button from '../../../../Button';
import styles from '../ButtonTestCommon.module.scss';

const cx = classNames.bind(styles);

const ActionButton = () => (
  <div id="action" className={cx('button-wrapper')}>
    <Button id="actionButton" text="Action" icon={<IconSquare />} variant="action" />
    <Button id="actionButtonDisabled" text="Action Disabled" icon={<IconSquare />} variant="action" isDisabled />
  </div>
);

export default ActionButton;
