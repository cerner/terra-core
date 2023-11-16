import React, { useState } from 'react';
import Combobox from 'terra-form-select/lib/Combobox';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const InvalidExample = () => {
  const [isInvalid, setIsInvalid] = useState(true);

  const handleOnChange = (val) => {
    if (val !== '') {
      setIsInvalid(false);
    } else {
      setIsInvalid(true);
    }
  };

  return (
    <>
      <Combobox placeholder="Select a color" allowClear onSelect={handleOnChange} isInvalid={isInvalid} className={cx('form-select')}>
        <Combobox.Option value="blue" display="Blue" />
        <Combobox.Option value="green" display="Green" />
        <Combobox.Option value="purple" display="Purple" />
        <Combobox.Option value="red" display="Red" />
        <Combobox.Option value="violet" display="Violet" />
      </Combobox>
      {(isInvalid) ? <span aria-live="assertive" aria-relevant="additions text" className={cx('invalid-example')}>Please select a color</span> : null}
    </>
  );
};

export default InvalidExample;
