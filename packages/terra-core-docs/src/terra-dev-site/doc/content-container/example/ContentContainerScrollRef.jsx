import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Button from 'terra-button';
import ContentContainer from 'terra-content-container';
import InputField from 'terra-form-input/lib/InputField';
import classNames from 'classnames/bind';
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
const contentfooter = <p id="contentfooter">Children count is </p>;

const onContainerScroll = (scrollRef) => document
  .getElementById('contentfooter')
  .append(` ${scrollRef.children.length}`);

const Container = () => {
  const [field, setField] = useState('');

  const handleFirstChange = (event) => {
    setField(event.target.value);
  };

  // eslint-disable-next-line no-alert
  const clickHandler = () => alert(
    `${
      field.trim().length !== 0
        ? `You have entered ${field}`
        : 'You have not entered anything'
    }`,
  );

  return (
    <div className={cx('content-container-fill')}>
      {/**
       * ScrollRefCallback is used to refer to the scrollable area of the content container DOM element.
       */}
      <ContentContainer
        header={contentheader}
        footer={contentfooter}
        fill
        scrollRefCallback={onContainerScroll}
      >
        <div key="1">{display1}</div>
        <div key="2">
          <InputField
            inputId="input-field-3"
            label="Enter Patient Name"
            type="text"
            onChange={handleFirstChange}
          />
        </div>
        <div key="3">
          <Button
            text="Submit"
            onClick={clickHandler}
            className={cx('button')}
          />
        </div>
      </ContentContainer>
    </div>
  );
};

export default Container;
