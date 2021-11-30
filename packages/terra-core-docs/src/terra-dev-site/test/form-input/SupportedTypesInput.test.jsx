import React from 'react';
import classNames from 'classnames/bind';
import Input from 'terra-form-input';
import styles from './common/Input.test.module.scss';

const cx = classNames.bind(styles);

const supportedTypes = ['text', 'number', 'password', 'email', 'search', 'tel', 'url', 'hidden'];

const getInputTypeExamples = (arr) => {
  const inputTypeExamples = [];
  for (let i = 0; i < arr.length; i += 1) {
    inputTypeExamples.push((
      <div className={cx('content-wrapper')}>
        <label htmlFor={`supported-${arr[i]}-input`}>{`Input type=${arr[i]}`}</label>
        <Input id={`supported-${arr[i]}-input`} type={arr[i]} />
      </div>
    ));
  }
  return inputTypeExamples;
};

const SupportedTypesInput = () => (
  <React.Fragment>
    { getInputTypeExamples(supportedTypes) }
  </React.Fragment>
);

export default SupportedTypesInput;
