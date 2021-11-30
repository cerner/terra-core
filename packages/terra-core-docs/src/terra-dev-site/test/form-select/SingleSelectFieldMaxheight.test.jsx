import React from 'react';
import classNames from 'classnames/bind';
import SingleSelectField from 'terra-form-select/lib/SingleSelectField';
import styles from './common/Select.test.module.scss';

const cx = classNames.bind(styles);

const SingleSelectFieldMaxheight = () => (
  <div className={cx('content-wrapper')}>
    <SingleSelectField label="Select Field" placeholder="Select a number" selectId="singleSelectField" defaultValue="2" maxHeight={300}>
      <SingleSelectField.Option value="1" display="One" />
      <SingleSelectField.Option value="2" display="Two" />
      <SingleSelectField.Option value="3" display="Three" />
      <SingleSelectField.Option value="4" display="Four" />
      <SingleSelectField.Option value="5" display="Five" />
      <SingleSelectField.Option value="6" display="Six" />
      <SingleSelectField.Option value="7" display="Seven" />
      <SingleSelectField.Option value="8" display="Eight" />
      <SingleSelectField.Option value="9" display="Nine" />
      <SingleSelectField.Option value="10" display="Ten" />
      <SingleSelectField.Option value="11" display="Eleven" />
      <SingleSelectField.Option value="12" display="Twelve" />
      <SingleSelectField.Option value="13" display="Thirteen" />
    </SingleSelectField>
  </div>
);

export default SingleSelectFieldMaxheight;
