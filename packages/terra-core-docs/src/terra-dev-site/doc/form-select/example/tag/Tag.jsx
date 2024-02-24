import React from 'react';
import TagSelect from 'terra-form-select/lib/TagSelect';
import Field from 'terra-form-field';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const TagSelectExample = () => (
  <Field
    label="Colors"
    htmlFor="color-field-1"
  >
    <TagSelect placeholder="Select a color" ariaLabel="Colors" className={cx('form-select')} inputId="color-field-1">
      <TagSelect.Option value="blue" display="Blue" />
      <TagSelect.Option value="green" display="Green" />
      <TagSelect.Option value="purple" display="Purple" />
      <TagSelect.Option value="red" display="Red" />
      <TagSelect.Option value="violet" display="Violet" />
    </TagSelect>
  </Field>
);

export default TagSelectExample;
