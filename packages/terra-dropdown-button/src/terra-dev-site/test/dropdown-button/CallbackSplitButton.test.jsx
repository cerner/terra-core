import React, { useState } from 'react';
import classnames from 'classnames/bind';
import SplitButton, { Item } from '../../../SplitButton';
import styles from './CallbackButtons.module.scss';

const cx = classnames.bind(styles);

const CallbackDropdownButtons = () => {
  const [color, setColor] = useState('green');

  return (
    <div className={cx('background', color)}>
      <SplitButton primaryOptionLabel="Gray" onSelect={() => { setColor('gray'); }}>
        <Item label="Red" onSelect={() => { setColor('red'); }} id="red" />
        <Item label="White" onSelect={() => { setColor('white'); }} id="white" />
        <Item label="Blue" onSelect={() => { setColor('blue'); }} id="blue" />
      </SplitButton>
    </div>
  );
};

export default CallbackDropdownButtons;
