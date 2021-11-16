import React, { useState } from 'react';
import classNames from 'classnames/bind';
import Select from '../../../Select';
import styles from './common/Select.test.module.scss';

const cx = classNames.bind(styles);

const arr = new Array(500);

const menu = () => {
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = <Select.Option value={i} display={i} />;
  }
};

const SelectVariantsWith500Options = () => {
  const [variant, setVariant] = useState('default');

  const handleOnSelect = (event) => {
    setVariant(event.target.value);
  };

  menu();
  return (
    <div className={cx('content-wrapper')}>
      <label htmlFor="variants">Choose a variant: </label>
      <select id="variants" onChange={handleOnSelect}>
        <option value="default">Default</option>
        <option value="combobox">Combobox</option>
        <option value="multiple">Multiple</option>
        <option value="search">Search</option>
        <option value="tag">Tag</option>
      </select>
      <h1>
        Variant:
        {' '}
        {variant}
      </h1>
      <Select placeholder="Select a number" variant={variant} id="search">
        {arr}
      </Select>
    </div>
  );
};

export default SelectVariantsWith500Options;
