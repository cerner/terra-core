import React from 'react';
import IconEdit from 'terra-icon/lib/icon/IconEdit';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Button from 'terra-button/lib/Button';

const buttonStyle = { margin: '5px' };

const ButtonVariant = () => (
  <div>
    <Button text="Neutral" style={buttonStyle} />
    <Button text="Emphasis" variant="emphasis" style={buttonStyle} />
    <Button text="Ghost" variant="ghost" style={buttonStyle} />
    <Button text="De-emphasis" variant="de-emphasis" style={buttonStyle} />
    <Button text="Action" variant="action" icon={<IconEdit />} style={buttonStyle} />
    <Button text="Utility" variant="utility" icon={<IconEdit />} style={buttonStyle} />
  </div>
);

export default ButtonVariant;
