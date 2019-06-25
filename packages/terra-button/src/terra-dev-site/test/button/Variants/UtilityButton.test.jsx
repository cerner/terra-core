import React from 'react';
import IconSquare from 'terra-icon/lib/icon/IconSquareSymbol';
import classNames from 'classnames/bind';

import Button from '../../../../Button';
import styles from '../ButtonTestCommon.module.scss';

const cx = classNames.bind(styles);

const UtilityButton = () => (
  <div id="utility" className={cx('button-wrapper')}>
    <Button id="utilityButton" text="Utility" icon={<IconSquare />} variant="utility" />
    <Button id="utilityButtonDisabled" text="Utility Disabled" icon={<IconSquare />} variant="utility" isDisabled />
  </div>
);

export default UtilityButton;
