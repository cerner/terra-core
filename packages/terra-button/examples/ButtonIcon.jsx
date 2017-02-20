import React from 'react';
import Button from '../src/Button';

const Icon = <span style={{ backgroundColor: 'black', color: 'black', height: '1em', width: '1em' }}>....</span>;

const ButtonIcon = () => (
  <div>
    <Button icon={Icon} text="icon" />
    <Button icon={Icon} text="icon" isReversed />
    <Button icon={Icon} />
  </div>
);

export default ButtonIcon;
