import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import IconEdit from 'terra-icon/lib/icon/IconEdit';
import Button from '../src/Button';

const Icon = <IconEdit />;

const ButtonIcon = () => (
  <div>
    <Button icon={Icon} text="icon" />
    <Button icon={Icon} text="icon" isReversed />
    <Button icon={Icon} />
  </div>
);

export default ButtonIcon;
