import React from 'react';
import Combobox from 'terra-form-select/lib/Combobox';
import Field from 'terra-form-field';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const ComboboxExample = () => (
  <Field
    label="Colors"
    htmlFor="color-field-1"
  >
    <Combobox placeholder="Select a color" ariaLabel="Colors" className={cx('form-select')} inputId="color-field-1">
      <Combobox.Option value="blue" display="Blue" />
      <Combobox.Option value="green" display="Green" />
      <Combobox.Option value="purple" display="Purple" />
      <Combobox.Option value="red" display="Red" />
      <Combobox.Option value="violet" display="Violet" />
    </Combobox>
  </Field>
);

export default ComboboxExample;
