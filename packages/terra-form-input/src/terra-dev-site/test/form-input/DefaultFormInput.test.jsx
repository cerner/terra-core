import React from 'react';
import classNames from 'classnames/bind';
import Input from '../../../Input';
import styles from './common/Input.test.module.scss';

const cx = classNames.bind(styles);

const DefaultInput = () => (
    <div className={cx('content-wrapper')}>
        <Input id="form-input-default" ariaLabel="label" />
    </div>
);

export default DefaultInput;
