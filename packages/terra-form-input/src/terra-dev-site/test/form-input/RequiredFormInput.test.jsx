import React from 'react';
import classNames from 'classnames/bind';
import Input from '../../../Input';
import styles from './common/Input.test.module.scss';

const cx = classNames.bind(styles);

const RequiredInput = () => (
    <div className={cx('content-wrapper')}>
        <Input required id="form-input-required" ariaLabel="label" />
    </div>
);

export default RequiredInput;
