import React from 'react';
import classNames from 'classnames/bind';

import Button from '../../../../Button';
import styles from '../ButtonTestCommon.module.scss';

const cx = classNames.bind(styles);

const GhostButton = () => (
  <div id="ghost" className={cx('button-wrapper')}>
    <Button id="ghostButton" text="Ghost" variant="ghost" />
    <Button id="ghostButtonDisabled" text="Ghost Disabled" variant="ghost" isDisabled />
  </div>
);

export default GhostButton;
