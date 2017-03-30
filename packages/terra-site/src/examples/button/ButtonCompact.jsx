import React from 'react';
import IconEdit from 'terra-icon/lib/icon/IconEdit';
import Button from 'terra-button';

const Icon = <IconEdit />;

const ButtonCompact = () => (
  <div>
    <Button text="Compact" isCompact />
    <Button icon={Icon} text="icon" isCompact />
    <Button icon={Icon} isCompact />
  </div>
);

export default ButtonCompact;
