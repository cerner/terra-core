import React from 'react';
import Button from 'terra-button';
import IconEdit from 'terra-icon/lib/icon/IconEdit';

const buttonStyle = { margin: '5px' };

const ButtonVariant = () => (
  <div>
    <Button text="Neutral" style={buttonStyle} />
    <Button text="Emphasis" variant="emphasis" style={buttonStyle} />
    <Button text="De-emphasis" variant="de-emphasis" style={buttonStyle} />
    <Button text="Action" variant="action" icon={<IconEdit />} style={buttonStyle} />
    <Button isIconOnly text="Action" variant="action" icon={<IconEdit />} style={buttonStyle} />
    <Button text="Utility" variant="utility" icon={<IconEdit />} style={buttonStyle} />
  </div>
);

export default ButtonVariant;
