import React from 'react';
import Button from '../src/Button';
import IconEdit from 'terra-icon/lib/icon/IconEdit';

const Icon = <IconEdit />;

const ButtonIcon = () => (
  <div>
    <Button icon={Icon} text="icon" />
    <Button icon={Icon} text="icon" isReversed />
    <Button icon={Icon} />
  </div>
);

export default ButtonIcon;
