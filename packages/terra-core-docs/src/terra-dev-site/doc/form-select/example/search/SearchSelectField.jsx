import React from 'react';
import SearchSelectField from 'terra-form-select/lib/SearchSelectField';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const SearchSelectFieldExample = () => (
  <SearchSelectField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-3" className={cx('form-select')}>
    <SearchSelectField.Option value="xSmall" display="Extra Small" />
    <SearchSelectField.Option value="small" display="Small" />
    <SearchSelectField.Option value="medium" display="Medium" />
    <SearchSelectField.Option value="large" display="Large" />
    <SearchSelectField.Option value="xLarge" display="Extra Large" />
  </SearchSelectField>
);

export default SearchSelectFieldExample;
