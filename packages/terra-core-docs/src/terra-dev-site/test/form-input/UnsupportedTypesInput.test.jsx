import React from 'react';
import classNames from 'classnames/bind';
import Input from 'terra-form-input';
import styles from './common/Input.test.module.scss';

const cx = classNames.bind(styles);

const unsupportedTypes = ['date', 'datetime-local', 'month', 'time', 'week', 'color', 'file', 'range', 'checkbox', 'radio', 'button', 'reset', 'submit'];

const getInputTypeExamples = (arr) => {
  const inputTypeExamples = [];
  for (let i = 0; i < arr.length; i += 1) {
    inputTypeExamples.push((
      <div className={cx('content-wrapper')}>
        <label htmlFor={`html-original-${arr[i]}-input`}>{`Input type=${arr[i]}`}</label>
        <Input id={`html-original-${arr[i]}-input`} type={arr[i]} />
      </div>
    ));
  }
  return inputTypeExamples;
};

const UnsupportedTypesInput = () => (
  <React.Fragment>
    { getInputTypeExamples(unsupportedTypes) }
  </React.Fragment>
);

export default UnsupportedTypesInput;
