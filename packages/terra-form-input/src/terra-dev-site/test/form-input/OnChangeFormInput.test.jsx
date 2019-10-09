import React from 'react';
import classNames from 'classnames/bind';
import Input from '../../../Input';
import styles from './common/Input.test.module.scss';

const cx = classNames.bind(styles);

const OnChangeInput = () => (
    <div className={cx('content-wrapper')}>
        <Input onChange={() => { }} id="form-input-onChange" ariaLabel="label" />
    </div>
);

export default OnChangeInput;
