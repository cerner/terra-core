import React from 'react';
import classNames from 'classnames/bind';
import Input from '../../../Input';
import styles from './common/Input.test.module.scss';

const cx = classNames.bind(styles);

const InvalidWithIncompleteInput = () => (
    <div className={cx('content-wrapper')}>
        <Input required isInvalid isIncomplete id="form-input-invalid-with-incomplete" ariaLabel="label" />
    </div>
);

export default InvalidWithIncompleteInput;
