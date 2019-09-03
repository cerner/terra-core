import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import TagSelect from 'terra-form-select/lib/TagSelect';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const TagSelectExample = () => (
  <TagSelect placeholder="Select a color" className={cx('form-select')}>
    <TagSelect.Option value="blue" display="Blue" />
    <TagSelect.Option value="green" display="Green" />
    <TagSelect.Option value="purple" display="Purple" />
    <TagSelect.Option value="red" display="Red" />
    <TagSelect.Option value="violet" display="Violet" />
  </TagSelect>
);

export default TagSelectExample;
