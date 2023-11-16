import React, { useState } from 'react';
import Combobox from 'terra-form-select/lib/Combobox';
import Field from 'terra-form-field';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const InvalidExample = () => {
  const [isInvalid, setIsInvalid] = useState(true);

  const handleOnChange = (val) => {
    if (val !== '') {
      setIsInvalid(false);
    } else {
      setIsInvalid(true);
    }
  };

  return (
    <Field
      label="Colors"
      error="Please select a color"
      htmlFor="input_id"
      isInvalid={isInvalid}
    >
      <Combobox placeholder="Select a color" inputId="input_id" allowClear onSelect={handleOnChange} isInvalid={isInvalid} className={cx('form-select')}>
        <Combobox.Option value="blue" display="Blue" />
        <Combobox.Option value="green" display="Green" />
        <Combobox.Option value="purple" display="Purple" />
        <Combobox.Option value="red" display="Red" />
        <Combobox.Option value="violet" display="Violet" />
      </Combobox>
    </Field>
  );
};

export default InvalidExample;
