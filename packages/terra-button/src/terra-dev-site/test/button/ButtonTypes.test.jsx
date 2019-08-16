import React from 'react';
import classNames from 'classnames/bind';
import Button from '../../../Button';
import styles from './ButtonTestCommon.module.scss';

const cx = classNames.bind(styles);

const ButtonWithTypeButton = () => <Button id="buttonWithTypeButton" text="Button Type is Default" type="button" />;
const ButtonWithTypeReset = () => <Button id="buttonWithTypeReset" text="Button Type is Reset" type="reset" />;
const ButtonWithTypeSubmit = () => <Button id="buttonWithTypeSubmit" text="Button Type is Submit" type="submit" />;

export default () => (
  <div>
    <ButtonWithTypeButton />
    <div className={cx('spacing')} />
    <ButtonWithTypeReset />
    <div className={cx('spacing')} />
    <ButtonWithTypeSubmit />
  </div>
);
