import React, { useState } from 'react';
import ContentContainer from 'terra-content-container';
import classNames from 'classnames/bind';
import InputField from 'terra-form-input/lib/InputField';
import Button from 'terra-button';
import styles from './ContentContainerDocCommon.module.scss';

const cx = classNames.bind(styles);

const display1 = (
  <p key="1">
    This tool is used to add patient details to the hospital database for
    documentation purposes. Please enter patient name as your name to get
    started.
  </p>
);

const contentheader = <h3>Registration Form</h3>;
const contentfooter = <p>Please enter the name as per the official document</p>;

const Container = () => {
  const [field, setField] = useState('');

  const handleFirstChange = (event) => {
    setField(event.target.value);
  };

  const clickHandler = () => alert(
    `${
      field.trim().length !== 0
        ? `You have entered ${field}`
        : 'You have not entered anything'
    }`,
  );

  return (
    <div className={cx('content-container-standard')}>
      <ContentContainer header={contentheader} footer={contentfooter}>
        <div key="1">{display1}</div>
        <div key="2" className={cx('field-content')}>
          <InputField
            inputId="input-field-1"
            label="Enter Patient Name"
            type="text"
            onChange={handleFirstChange}
          />
        </div>
        <div key="3">
          <Button text="Submit" onClick={clickHandler} />
        </div>
      </ContentContainer>
    </div>
  );
};

export default Container;
