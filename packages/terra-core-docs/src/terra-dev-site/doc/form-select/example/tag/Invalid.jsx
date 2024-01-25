import React, { useState } from 'react';
import TagSelect from 'terra-form-select/lib/TagSelect';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const InvalidExample = () => {
  const [isInvalid, setInvalid] = useState(true);
  const handleOnChange = (value) => {
    const invalid = !!((!value || value === ''));
    setInvalid(invalid);
  };
  return (
    <>
      <TagSelect placeholder="Select a color" isInvalid={isInvalid} ariaLabel={(isInvalid) ? 'Please select a color' : undefined} className={cx('form-select')} onSearch={handleOnChange} onChange={handleOnChange}>
        <TagSelect.Option value="blue" display="Blue" />
        <TagSelect.Option value="green" display="Green" />
        <TagSelect.Option value="purple" display="Purple" />
        <TagSelect.Option value="red" display="Red" />
        <TagSelect.Option value="violet" display="Violet" />
      </TagSelect>
      {isInvalid && <span className={cx('error-text')}>Please select a color</span>}
      <p>Required: Please select a color from above list</p>
    </>
  );
};

export default InvalidExample;
