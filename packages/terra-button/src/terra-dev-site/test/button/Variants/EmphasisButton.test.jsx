import React from 'react';
import classNames from 'classnames/bind';
import Button from '../../../../Button';
import styles from '../ButtonTestCommon.module.scss';

const cx = classNames.bind(styles);

const EmphasisButton = () => (
  <div id="emphasis" className={cx('button-wrapper')}>
    <Button id="emphasisButton" text="Emphasis" variant="emphasis" />
    <Button id="emphasisButtonDisabled" text="Emphasis Disabled" variant="emphasis" isDisabled />
  </div>
);

export default EmphasisButton;
