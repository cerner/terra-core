import React from 'react';
import IconSquare from 'terra-icon/lib/icon/IconSquareSymbol';
import classNames from 'classnames/bind';
import { IconButton } from 'terra-button';
import styles from '../ButtonTestCommon.module.scss';

const cx = classNames.bind(styles);

const UtilityButton = () => (
  <div id="utility" className={cx('button-wrapper')}>
    <IconButton id="utilityButton" text="Utility" icon={<IconSquare a11yLabel="square" />} iconType="informative" variant="utility" />
    <IconButton id="utilityButtonDisabled" text="Utility Disabled" icon={<IconSquare a11yLabel="square" />} iconType="informative" variant="utility" isDisabled />
  </div>
);

export default UtilityButton;
