import React from 'react';
import TagSelectField from 'terra-form-select/lib/TagSelectField';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const TagSelectFieldExample = () => (
  <TagSelectField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field" required className={cx('form-select')}>
    <TagSelectField.Option value="xSmall" display="Extra Small" />
    <TagSelectField.Option value="small" display="Small" />
    <TagSelectField.Option value="medium" display="Medium" />
    <TagSelectField.Option value="large" display="Large" />
    <TagSelectField.Option value="xLarge" display="Extra Large" />
  </TagSelectField>
);

export default TagSelectFieldExample;
