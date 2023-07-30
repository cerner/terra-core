import React from 'react';
import ContentContainer from 'terra-content-container';
import classNames from 'classnames/bind';
import Button from 'terra-button';
import styles from './ContentContainerTestCommon.module.scss';

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

const Container = () => (
  <div className={cx('content-container-fill')}>
    <ContentContainer header={contentheader} footer={contentfooter}>
      <div key="1" id="click-on-content">{display1}</div>
      <div key="2">
        <Button text="Submit" />
      </div>
    </ContentContainer>
  </div>
);

export default Container;
