import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import SingleSelectField from 'terra-form-select/lib/SingleSelectField';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const SingleSelectFieldExample = () => (
  <SingleSelectField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field" className={cx('form-select')}>
    <SingleSelectField.Option value="xSmall" display="Extra Small" />
    <SingleSelectField.Option value="small" display="Small" />
    <SingleSelectField.Option value="medium" display="Medium" />
    <SingleSelectField.Option value="large" display="Large" />
    <SingleSelectField.Option value="xLarge" display="Extra Large" />
  </SingleSelectField>
);

export default SingleSelectFieldExample;
