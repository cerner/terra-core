import React from 'react';
import classNames from 'classnames/bind';
import Button from '../../../../Button';
import styles from '../ButtonTestCommon.module.scss';

const cx = classNames.bind(styles);

const DeemphasisButton = () => (
  <div id="de-emphasis" className={cx('button-wrapper')}>
    <Button id="de-emphasisButton" text="De-emphasis" variant="de-emphasis" />
    <Button id="de-emphasisButtonDisabled" text="De-emphasis Disabled" variant="de-emphasis" isDisabled />
  </div>
);

export default DeemphasisButton;
