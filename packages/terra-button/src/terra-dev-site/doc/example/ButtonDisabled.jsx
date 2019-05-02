import React from 'react';
import IconEdit from 'terra-icon/lib/icon/IconEdit';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Button from 'terra-button/lib/Button';

const buttonStyle = { margin: '5px' };

const ButtonDisabled = () => (
  <div>
    <Button text="Disabled Button" isDisabled style={buttonStyle} />
    <Button text="Disabled Emphasis" variant="emphasis" isDisabled style={buttonStyle} />
    <Button text="Disabled Ghost" variant="ghost" isDisabled style={buttonStyle} />
    <Button text="Disabled De-emphasis" variant="de-emphasis" isDisabled style={buttonStyle} />
    <Button text="Disabled Action" variant="action" isDisabled icon={<IconEdit />} style={buttonStyle} />
    <Button text="Disabled Utility" variant="utility" isDisabled icon={<IconEdit />} style={buttonStyle} />
  </div>
);

export default ButtonDisabled;
