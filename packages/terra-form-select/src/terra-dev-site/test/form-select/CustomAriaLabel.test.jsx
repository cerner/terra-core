import React from 'react';
import classNames from 'classnames/bind';
import Select from '../../../Select';
import SelectField from '../../../SelectField';
import styles from './common/Select.test.module.scss';

const cx = classNames.bind(styles);

const CustomAriaLabel = () => (
  <div className={cx('content-wrapper')}>
    <React.Fragment>
      <Select ariaLabel="Custom label 1" placeholder="Select a color" id="default" defaultValue="green">
        <Select.Option value="blue" display="Blue" />
        <Select.Option value="green" display="Green" />
        <Select.Option value="purple" display="Purple" />
        <Select.Option value="red" display="Red" />
        <Select.Option value="violet" display="Violet" />
      </Select>
      <br />
      <SelectField label="Custom label 2" placeholder="Select a size" selectId="select-field" defaultValue="small">
        <SelectField.Option value="xSmall" display="Extra Small" />
        <SelectField.Option value="small" display="Small" />
        <SelectField.Option value="medium" display="Medium" />
        <SelectField.Option value="large" display="Large" />
        <SelectField.Option value="xLarge" display="Extra Large" />
      </SelectField>
    </React.Fragment>
  </div>
);

export default CustomAriaLabel;
