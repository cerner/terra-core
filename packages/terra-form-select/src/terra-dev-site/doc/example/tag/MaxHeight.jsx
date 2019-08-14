import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import TagSelect from 'terra-form-select/lib/TagSelect';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const MaxHeightExample = () => (
  <TagSelect placeholder="Select a color" maxHeight={150} className={cx('form-select')}>
    <TagSelect.Option value="black" display="Black" />
    <TagSelect.Option value="blue" display="Blue" />
    <TagSelect.Option value="brown" display="Brown" />
    <TagSelect.Option value="green" display="Green" />
    <TagSelect.Option value="purple" display="Purple" />
    <TagSelect.Option value="red" display="Red" />
    <TagSelect.Option value="violet" display="Violet" />
    <TagSelect.Option value="white" display="White" />
    <TagSelect.Option value="yellow" display="Yellow" />
  </TagSelect>
);

export default MaxHeightExample;
