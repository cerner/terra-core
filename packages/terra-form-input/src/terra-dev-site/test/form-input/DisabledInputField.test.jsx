import React from 'react';
import classNames from 'classnames/bind';
import InputField from '../../../InputField';
import styles from './common/Input.test.module.scss';

const cx = classNames.bind(styles);

const DisabledInputFieldExample = () => (
  <div className={cx('content-wrapper')}>
    <InputField
      disabled
      inputId="test-input"
      defaultValue="Value"
      error="Text"
      help="Help"
      hideRequired
      inputAttrs={{
        name: 'test',
        type: 'text',
      }}
      label="Label Text"
      labelAttrs={{
        className: 'label',
      }}
      showOptional
      maxWidth="40%"
    />
  </div>
);

export default DisabledInputFieldExample;
