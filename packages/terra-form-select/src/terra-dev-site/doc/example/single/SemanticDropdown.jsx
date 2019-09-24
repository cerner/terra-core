import React from 'react';
import SingleSelect from 'terra-form-select/lib/SingleSelect';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const SemanticDropdownExample = () => (
  <SingleSelect placeholder="Select a color" className={cx('form-select')} useSemanticDropdown>
    <SingleSelect.Option value="blue" display="Blue" />
    <SingleSelect.Option value="green" display="Green" />
    <SingleSelect.Option value="purple" display="Purple" />
    <SingleSelect.Option value="red" display="Red" />
    <SingleSelect.Option value="violet" display="Violet" />
  </SingleSelect>
);

export default SemanticDropdownExample;
