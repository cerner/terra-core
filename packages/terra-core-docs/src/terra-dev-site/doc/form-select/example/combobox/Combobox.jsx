import React from 'react';
import Combobox from 'terra-form-select/lib/Combobox';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const ComboboxExample = () => (
  <React.Fragment>
    <label htmlFor="color-field-1"><strong>Colors</strong></label>
    <div className={cx('combobox-label-example')}>
      <Combobox placeholder="Select a color" className={cx('form-select')} inputId="color-field-1">
        <Combobox.Option value="blue" display="Blue" />
        <Combobox.Option value="green" display="Green" />
        <Combobox.Option value="purple" display="Purple" />
        <Combobox.Option value="red" display="Red" />
        <Combobox.Option value="violet" display="Violet" />
      </Combobox>
    </div>
  </React.Fragment>
);

export default ComboboxExample;
