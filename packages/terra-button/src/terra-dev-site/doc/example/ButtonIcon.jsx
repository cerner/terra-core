import React from 'react';
import IconEdit from 'terra-icon/lib/icon/IconEdit';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Button from 'terra-button/lib/Button';

const Icon = <IconEdit />;
const buttonStyle = { margin: '5px' };

const ButtonIcon = () => (
  <div>
    <Button icon={Icon} text="icon" style={buttonStyle} />
    <Button icon={Icon} text="icon" isReversed style={buttonStyle} />
    <Button icon={Icon} isIconOnly text="Icon Only Button" style={buttonStyle} />
  </div>
);

export default ButtonIcon;
