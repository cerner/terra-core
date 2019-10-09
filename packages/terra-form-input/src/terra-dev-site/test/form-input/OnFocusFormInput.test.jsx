import React from 'react';
import classNames from 'classnames/bind';
import Input from '../../../Input';
import styles from './common/Input.test.module.scss';

const cx = classNames.bind(styles);

const OnFocusInput = () => (
    <div className={cx('content-wrapper')}>
        <Input onFocus={() => { }} id="form-input-onFocus" ariaLabel="label" />
    </div>
);

export default OnFocusInput;
