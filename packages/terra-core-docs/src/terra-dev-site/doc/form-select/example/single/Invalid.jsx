import React from 'react';
import { SingleSelect } from 'terra-form-select';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const InvalidExample = () => (
  <>
    <SingleSelect placeholder="Select a color" isInvalid className={cx('form-select')}>
      <SingleSelect.Option value="blue" display="Blue" />
      <SingleSelect.Option value="green" display="Green" />
      <SingleSelect.Option value="purple" display="Purple" />
      <SingleSelect.Option value="red" display="Red" />
      <SingleSelect.Option value="violet" display="Violet" />
    </SingleSelect>
    <p>Note: User should always use form single select field inorder to convey the error state when error has occurred. </p>
  </>
);

export default InvalidExample;
