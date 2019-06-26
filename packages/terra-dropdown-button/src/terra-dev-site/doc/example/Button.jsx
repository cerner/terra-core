import React, { useState } from 'react';
import classnames from 'classnames/bind';

import Button from '../../../_Button';
import styles from './Button.module.scss';

const cx = classnames.bind(styles);

export default () => {
  const [selected, setSelected] = useState('None');
  return (
    <div>
      <p>Note: Keyboard interaction only works when inside a dropdown</p>
      <p>{`Last selected: ${selected}`}</p>
      <ul className={cx('list')}>
        <Button label="Default" onClick={() => { setSelected('Default'); }} requestClose={() => {}} />
        <Button label="Focused" onClick={() => { setSelected('Focused'); }} isFocused requestClose={() => {}} />
        <Button label="Active" onClick={() => { setSelected('Active'); }} isActive requestClose={() => {}} />
        <Button label="Focused and Active" onClick={() => { setSelected('Focused and Active'); }} isFocused isActive requestClose={() => {}} />
      </ul>
    </div>
  );
};
