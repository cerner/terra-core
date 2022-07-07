import React from 'react';
import IconSquare from 'terra-icon/lib/icon/IconSquareSymbol';
import classNames from 'classnames/bind';
import { IconButton } from 'terra-button';
import styles from '../ButtonTestCommon.module.scss';

const cx = classNames.bind(styles);

const ActionButton = () => (
  <div id="action" className={cx('button-wrapper')}>
    <IconButton id="actionButton" text="Action" icon={<IconSquare a11yLabel="square" />} iconType="informative" variant="action" />
    <IconButton id="actionButtonDisabled" text="Action Disabled" icon={<IconSquare a11yLabel="square" />} iconType="informative" variant="action" isDisabled />
  </div>
);

export default ActionButton;
