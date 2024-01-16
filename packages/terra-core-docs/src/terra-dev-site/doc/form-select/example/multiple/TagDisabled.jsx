import React, { useState } from 'react';
import MultiSelect from 'terra-form-select/lib/MultiSelect';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const TagDisabledExample = () => {
  const [value, setValue] = useState(['grape']);

  return (
    <div className={cx('select-container')}>
      <MultiSelect placeholder="Select a Fruit" value={value} isTagDisabled ariaLabel="Selected Fruits" onChange={setValue} className={cx('form-select')}>
        <MultiSelect.Option value="banana" display="Banana" />
        <MultiSelect.Option value="grape" display="Grape" />
        <MultiSelect.Option value="pineapple" display="Pineapple" />
        <MultiSelect.Option value="kiwi" display="Kiwi" />
        <MultiSelect.Option value="avocado" display="Avocado" />
        <MultiSelect.Option value="watermelon" display="Water Melon" />
        <MultiSelect.Option value="apple" display="Apple" />
        <MultiSelect.Option value="figs" display="Figs" />
        <MultiSelect.Option value="mango" display="Mango" />
        <MultiSelect.Option value="cherry" display="Cherry" />
        <MultiSelect.Option value="orange" display="Orange" />
        <MultiSelect.Option value="pears" display="Pears" />
        <MultiSelect.Option value="blueberry" display="BlueBerry" />
        <MultiSelect.Option value="lemon" display="Lemon" />
        <MultiSelect.Option value="pomegranate" display="Pomegranate" />
        <MultiSelect.Option value="muskmelon" display="Muskmelon" />
        <MultiSelect.Option value="dragonfruit" display="Dragon Fruit" />
      </MultiSelect>
    </div>
  );
};

export default TagDisabledExample;
