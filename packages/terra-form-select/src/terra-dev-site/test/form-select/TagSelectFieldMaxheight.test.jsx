import React from 'react';
import classNames from 'classnames/bind';
import styles from './common/Select.test.module.scss';
import TagSelectField from '../../../TagSelectField';

const cx = classNames.bind(styles);

const TagSelectFieldMaxheight = () => (
  <div className={cx('content-wrapper')}>
    <TagSelectField label="Select Field" placeholder="Select a number" selectId="tagSelectField" maxHeight={300}>
      <TagSelectField.Option value="1" display="One" />
      <TagSelectField.Option value="2" display="Two" />
      <TagSelectField.Option value="3" display="Three" />
      <TagSelectField.Option value="4" display="Four" />
      <TagSelectField.Option value="5" display="Five" />
      <TagSelectField.Option value="6" display="Six" />
      <TagSelectField.Option value="7" display="Seven" />
      <TagSelectField.Option value="8" display="Eight" />
      <TagSelectField.Option value="9" display="Nine" />
      <TagSelectField.Option value="10" display="Ten" />
      <TagSelectField.Option value="11" display="Eleven" />
      <TagSelectField.Option value="12" display="Twelve" />
      <TagSelectField.Option value="13" display="Thirteen" />
    </TagSelectField>
  </div>
);

export default TagSelectFieldMaxheight;
