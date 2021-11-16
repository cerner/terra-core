import React from 'react';
import classNames from 'classnames/bind';
import ComboboxField from 'terra-form-select/lib/ComboboxField';
import styles from './common/Select.test.module.scss';

const cx = classNames.bind(styles);

const ComboboxFieldMaxHeight = () => (
  <div className={cx('content-wrapper')}>
    <ComboboxField label="Combobox Field" placeholder="Select a number" selectId="comboboxField" defaultValue="3" maxHeight={300}>
      <ComboboxField.Option value="1" display="One" />
      <ComboboxField.Option value="2" display="Two" />
      <ComboboxField.Option value="3" display="Three" />
      <ComboboxField.Option value="4" display="Four" />
      <ComboboxField.Option value="5" display="Five" />
      <ComboboxField.Option value="6" display="Six" />
      <ComboboxField.Option value="7" display="Seven" />
      <ComboboxField.Option value="8" display="Eight" />
      <ComboboxField.Option value="9" display="Nine" />
      <ComboboxField.Option value="10" display="Ten" />
      <ComboboxField.Option value="11" display="Eleven" />
      <ComboboxField.Option value="12" display="Twelve" />
      <ComboboxField.Option value="13" display="Thirteen" />
    </ComboboxField>
  </div>
);

export default ComboboxFieldMaxHeight;
