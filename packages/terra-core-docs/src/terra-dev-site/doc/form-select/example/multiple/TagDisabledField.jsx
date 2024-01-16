import React, { useState } from 'react';
import MultiSelectField from 'terra-form-select/lib/MultiSelect';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const TagDisabledFieldExample = () => {
  const [value, setValue] = useState(['grape']);

  return (
    <div className={cx('select-container')}>
      <MultiSelectField placeholder="Select a Fruit" value={value} isTagDisabled ariaLabel="Selected Fruits" onChange={setValue} className={cx('form-select')}>
        <MultiSelectField.Option value="banana" display="Banana" />
        <MultiSelectField.Option value="grape" display="Grape" />
        <MultiSelectField.Option value="pineapple" display="Pinea    pple" />
        <MultiSelectField.Option value="kiwi" display="Kiwi" />
        <MultiSelectField.Option value="avocado" display="Avocado" />
        <MultiSelectField.Option value="watermelon" display="Water Melon" />
        <MultiSelectField.Option value="apple" display="Apple" />
        <MultiSelectField.Option value="figs" display="Figs" />
        <MultiSelectField.Option value="mango" display="Mango" />
        <MultiSelectField.Option value="cherry" display="Cherry" />
        <MultiSelectField.Option value="orange" display="Orange" />
        <MultiSelectField.Option value="pears" display="Pears" />
        <MultiSelectField.Option value="blueberry" display="BlueBerry" />
        <MultiSelectField.Option value="lemon" display="Lemon" />
        <MultiSelectField.Option value="pomegranate" display="Pomegranate" />
        <MultiSelectField.Option value="muskmelon" display="Muskmelon" />
        <MultiSelectField.Option value="dragonfruit" display="Dragon Fruit" />
      </MultiSelectField>
    </div>
  );
};

export default TagDisabledFieldExample;
