import React, { useState } from 'react';
import ContentContainer from 'terra-content-container';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import InputField from 'terra-form-input/lib/InputField';
import styles from './ContentContainerDocCommon.module.scss';

const cx = classNames.bind(styles);

const display1 = (
  <p key="1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam
    lectus quis finibus feugiat. Nullam ut sagittis purus. Pellentesque habitant
    morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut
    placerat fringilla aliquam. Phasellus in eleifend odio. Nunc maximus sem vel
    odio lobortis, in accumsan arcu dapibus. Nunc consectetur, nunc in mattis
    pharetra, augue felis aliquet nunc, non facilisis est velit vel elit.
  </p>
);

const contentheader = <h3>Display Header</h3>;
const contentfooter = <h3>Display Footer</h3>;

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
    <div className={cx('content-container-fill')}>
      <ContentContainer header={contentheader} footer={contentfooter} fill>
        <div key="1">{display1}</div>
        <div key="2">
          <InputField
            inputId='input-field-2'
            label='Enter Patient Name'
            type='text'
            onChange={handleFirstChange}
          />
        </div>
        <div key="3">
          <Button
            text='Submit'
            onClick={clickHandler}
            className={cx('button')}
          />
        </div>
      </ContentContainer>
    </div>
  );
};

export default Container;
