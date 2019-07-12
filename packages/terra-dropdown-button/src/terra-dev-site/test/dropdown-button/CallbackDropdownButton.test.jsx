import React, { useState } from 'react';
import classnames from 'classnames/bind';
import DropdownButton, { Item } from '../../../DropdownButton';
import styles from './CallbackButtons.module.scss';

const cx = classnames.bind(styles);

const CallbackDropdownButtons = () => {
  const [color, setColor] = useState('green');

  return (
    <div className={cx('background', color)}>
      <DropdownButton label="Colors">
        <Item label="Red" onClick={() => { setColor('red'); }} id="red" />
        <Item label="White" onClick={() => { setColor('white'); }} id="white" />
        <Item label="Blue" onClick={() => { setColor('blue'); }} id="blue" />
      </DropdownButton>
    </div>
  );
};

export default CallbackDropdownButtons;
