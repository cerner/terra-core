import React from 'react';
import classNames from 'classnames/bind';
import Button from '../../../../Button';
import styles from '../ButtonTestCommon.module.scss';

const cx = classNames.bind(styles);

const NeutralButton = () => (
  <div id="neutral" className={cx('button-wrapper')}>
    <Button id="neutralButton" text="Neutral" variant="neutral" />
    <Button id="neutralButtonDisabled" text="Neutral Disabled" variant="neutral" isDisabled />
  </div>
);

export default NeutralButton;
