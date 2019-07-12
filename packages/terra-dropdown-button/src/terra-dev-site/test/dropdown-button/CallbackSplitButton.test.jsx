import React, { useState } from 'react';
import classnames from 'classnames/bind';
import SplitButton, { Item } from '../../../SplitButton';
import styles from './CallbackButtons.module.scss';

const cx = classnames.bind(styles);

const CallbackDropdownButtons = () => {
  const [color, setColor] = useState('green');

  return (
    <div className={cx('background', color)}>
      <SplitButton primaryOptionLabel="Gray" onClick={() => { setColor('gray'); }}>
        <Item label="Red" onClick={() => { setColor('red'); }} id="red" />
        <Item label="White" onClick={() => { setColor('white'); }} id="white" />
        <Item label="Blue" onClick={() => { setColor('blue'); }} id="blue" />
      </SplitButton>
    </div>
  );
};

export default CallbackDropdownButtons;
