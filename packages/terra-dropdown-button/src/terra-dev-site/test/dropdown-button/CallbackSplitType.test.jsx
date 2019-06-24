import React, { useState } from 'react';
import classnames from 'classnames/bind';
import DropdownButton, { Types } from '../../../DropdownButton';
import styles from './CallbackDropdownButtons.module.scss';

const cx = classnames.bind(styles);

const CallbackDropdownButtons = () => {
  const [color, setColor] = useState('green');

  return (
    <div className={cx('background', color)}>
      <DropdownButton defaultOption={{ label: 'Gray', callback: () => { setColor('gray'); } }} type={Types.SPLIT}>
        <DropdownButton.Option label="Red" callback={() => { setColor('red'); }} id="red" />
        <DropdownButton.Option label="White" callback={() => { setColor('white'); }} id="white" />
        <DropdownButton.Option label="Blue" callback={() => { setColor('blue'); }} id="blue" />
      </DropdownButton>
    </div>
  );
};

export default CallbackDropdownButtons;
