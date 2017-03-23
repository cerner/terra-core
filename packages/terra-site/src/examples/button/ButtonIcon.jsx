import React from 'react';
import IconEdit from 'terra-icon/lib/icon/IconEdit';
import Button from 'terra-button';

const Icon = <IconEdit />;

const ButtonIcon = () => (
  <div>
    <Button icon={Icon} text="icon" />
    <Button icon={Icon} text="icon" isReversed />
    <Button icon={Icon} />
  </div>
);

export default ButtonIcon;
