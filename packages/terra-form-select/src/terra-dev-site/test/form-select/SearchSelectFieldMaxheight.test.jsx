import React from 'react';
import classNames from 'classnames/bind';
import styles from './common/Select.test.module.scss';
import SearchSelectField from '../../../SearchSelectField';

const cx = classNames.bind(styles);

const SearchSelectFieldMaxheight = () => (
  <div className={cx('content-wrapper')}>
    <SearchSelectField label="Select Field" selectId="searchSelectField" defaultValue="2" maxHeight={300}>
      <SearchSelectField.Option value="1" display="One" />
      <SearchSelectField.Option value="2" display="Two" />
      <SearchSelectField.Option value="3" display="Three" />
      <SearchSelectField.Option value="4" display="Four" />
      <SearchSelectField.Option value="5" display="Five" />
      <SearchSelectField.Option value="6" display="Six" />
      <SearchSelectField.Option value="7" display="Seven" />
      <SearchSelectField.Option value="8" display="Eight" />
      <SearchSelectField.Option value="9" display="Nine" />
      <SearchSelectField.Option value="10" display="Ten" />
      <SearchSelectField.Option value="11" display="Eleven" />
      <SearchSelectField.Option value="12" display="Twelve" />
      <SearchSelectField.Option value="13" display="Thirteen" />
    </SearchSelectField>
  </div>
);

export default SearchSelectFieldMaxheight;
