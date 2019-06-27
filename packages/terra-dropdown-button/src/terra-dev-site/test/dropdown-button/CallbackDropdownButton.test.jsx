import React, { useState } from 'react';
import classnames from 'classnames/bind';
import DropdownButton, { Button } from '../../../DropdownButton';
import styles from './CallbackButtons.module.scss';

const cx = classnames.bind(styles);

const CallbackDropdownButtons = () => {
  const [color, setColor] = useState('green');

  return (
    <div className={cx('background', color)}>
      <DropdownButton label="Colors">
        <Button label="Red" onClick={() => { setColor('red'); }} id="red" />
        <Button label="White" onClick={() => { setColor('white'); }} id="white" />
        <Button label="Blue" onClick={() => { setColor('blue'); }} id="blue" />
      </DropdownButton>
    </div>
  );
};

export default CallbackDropdownButtons;
