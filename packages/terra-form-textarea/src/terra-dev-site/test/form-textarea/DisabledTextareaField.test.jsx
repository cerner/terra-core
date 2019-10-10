import React from 'react';
import classNames from 'classnames/bind';
import TextareaField from '../../../TextareaField';
import styles from './common/Textarea.test.module.scss';

const cx = classNames.bind(styles);

const DisabledTextareaFieldExample = () => (
  <div className={cx('content-wrapper')}>
    <TextareaField
      disabled
      defaultValue="Value"
      inputId="test-input"
      error="Error message."
      help="Help message."
      hideRequired
      inputAttrs={{
        name: 'test',
      }}
      label="Label Text"
      labelAttrs={{
        className: 'label',
      }}
      showOptional
    />
  </div>
);

export default DisabledTextareaFieldExample;
