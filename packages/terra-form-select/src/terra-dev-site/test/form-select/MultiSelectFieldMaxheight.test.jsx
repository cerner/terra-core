import React from 'react';
import classNames from 'classnames/bind';
import styles from './common/Select.test.module.scss';
import MultiSelectField from '../../../MultiSelectField';

const cx = classNames.bind(styles);

const MultiSelectFieldMaxheight = () => (
  <div className={cx('content-wrapper')}>
    <MultiSelectField label="Multi select Field" selectId="multiSelectField" maxHeight={300}>
      <MultiSelectField.Option value="1" display="One" />
      <MultiSelectField.Option value="2" display="Two" />
      <MultiSelectField.Option value="3" display="Three" />
      <MultiSelectField.Option value="4" display="Four" />
      <MultiSelectField.Option value="5" display="Five" />
      <MultiSelectField.Option value="6" display="Six" />
      <MultiSelectField.Option value="7" display="Seven" />
      <MultiSelectField.Option value="8" display="Eight" />
      <MultiSelectField.Option value="9" display="Nine" />
      <MultiSelectField.Option value="10" display="Ten" />
      <MultiSelectField.Option value="11" display="Eleven" />
      <MultiSelectField.Option value="12" display="Twelve" />
      <MultiSelectField.Option value="13" display="Thirteen" />
    </MultiSelectField>
  </div>
);

export default MultiSelectFieldMaxheight;
