import React from 'react';
import classNames from 'classnames/bind';
import InputField from 'terra-form-input/lib/InputField';
import styles from './common/Input.test.module.scss';

const cx = classNames.bind(styles);

const PlaceholderFormInputField = () => (
  <div className={cx('content-wrapper')}>
    <InputField
      inputId="test-input"
      hideRequired
      inputAttrs={{
        name: 'test',
        type: 'text',
        placeholder: 'Enter The Text',
        showMpageFusionPlaceholder: true,
      }}
      label="Label Text"
      labelAttrs={{
        className: 'label',
      }}
      maxWidth="40%"
    />
  </div>
);

export default PlaceholderFormInputField;
